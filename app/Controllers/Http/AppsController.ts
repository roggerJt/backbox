import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Application from '@ioc:Adonis/Core/Application'
import Project from 'App/Models/Project'
import Route from '@ioc:Adonis/Core/Route'

export default class AppsController {


    //vista de inicio de la app
    public async index ({ view, response }: HttpContextContract) {
        
        const menu = true;
        return view.render('app/index', {menu})
    }


    //vista de crear proyecto base (BOX)
    public async create ({ view }: HttpContextContract) {


        /* const menu = false; */
        const modules = [
            'módulo1',
            'módulo2',
            'módulo3',
            'módulo4',
            'módulo5',
            'módulo6',
            'módulo7',
            'módulo8',
            'módulo9',
            'módulo10',
        ];
        return view.render('app/create', {modules})
    }


    //Gardar proyecto base (BOX)
    public async store ({ request, response, session   }: HttpContextContract) {

        const name = request.input('name')
        let color = request.input('color')
        const logo = request.file('logo')
        let db_name = request.input('db_name')
        let db_user = request.input('db_user')
        let db_password = request.input('db_password')
        let url_logo;
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;

        if(!name){
            session.flash('error', 'Ingresa un nombre para el proyecto')
            response.redirect('back')
        }

        if(!logo){
            url_logo = '/images/logo_demo.png';
        }else{
            let name_logo = `${new Date().getTime()}.${logo.extname}`
            url_logo = `/images/logos/${name_logo}`
            await logo.move(Application.publicPath('images/logos'), {
                name: `${name_logo}`,
            })
        }

        if(!db_name){
            let ch = name;
            ch = ch.replace(/[*~^=&%$#{}+<>°|¨¬()"!¡'¿ñ´@/.:,;ª©₡€½?áéíóú]/gi, "")
            ch = ch.replace(/ /g, "_")
            db_name = ch.toLowerCase()
        }
        
        if(!db_user){
            db_user = 'user_'+db_name.toLowerCase()
        }

        if(!db_password){
            for (let i = 0; i < 15; i++) {
                db_password += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
        }

        //generamos UID y KEY
        let uid_temp = name
        let pr
        do{
            uid_temp = uid_temp.replace(/[*~^=&%$#{}+<>°|¨¬()"!¡'¿ñ´@/.:,;ª©₡€½?áéíóú]/gi, "")
            uid_temp = uid_temp.replace(/ /g, "")
            pr = await Project.findBy('uid', uid_temp)
        }while(pr)

        const uid = uid_temp.toLowerCase()
        let key = '';

        for (let i = 0; i < 45; i++) {
            key += characters.charAt(Math.floor(Math.random() * charactersLength));
        }


        const project = new Project()
        project.name = name
        project.color = color
        project.logo = url_logo
        project.db_name = db_name
        project.db_user = db_user
        project.db_password = db_password
        project.uid = uid
        project.key = key
        await project.save()

        /* const project = await Project.create({
            name: name,
            color: color,
            logo: url_logo,
            db_name: db_name,
            db_user: db_user,
            db_password: db_password,
            uid: uid,
            key: key,
        }) */

        console.log(project.$isPersisted) // true si guarda bn
        
        //crear archivos dockers
        let dk = `version: '3' \n`+
        `services: \n`+ 
        `  #node 14 \n`+
        `  appnode: \n`+
        `    container_name: appnode \n`+
        `    image: node-adonis \n`+
        `    build: \n`+
        `      context: . \n`+
        `      dockerfile: Dockerfilenode \n`+
        `    environment: \n`+
        `      - NODE_ENV=production \n`+
        `      - DB_CONNECTION=pg \n`+
        `      - PG_HOST=127.0.0.1 \n`+
        `      - PG_PORT=5432 \n`+
        `      - PG_USER=${db_user} \n`+
        `      - PG_PASSWORD=${db_password} \n`+
        `      - PG_DB_NAME=${db_name} \n`+
        `      - WS_KEY=${key} \n`+
        `      - WS_UID=${uid} \n`+
        `      - APP_TITLE=${name} \n`+
        `    restart: unless-stopped \n`+
        `    networks: \n`+
        `      - net${uid} \n`+
        `     \n`+
        `     \n`+
        `  #Nginx service \n`+
        `  webservice: \n`+
        `    container_name: webservice \n`+
        `    image: nginx-adonis \n`+
        `    build: \n`+
        `      context: . \n`+
        `      dockerfile: Dockerfileserver \n`+
        `    depends_on: \n`+
        `      - appnode \n`+
        `    ports: \n`+
        `      - "80:80" \n`+
        `      - "443:443" \n`+
        `      - "22:22" \n`+
        `      - "21:21" \n`+
        `    restart: unless-stopped \n`+
        `    networks: \n`+
        `      - net${uid} \n`+
        ` \n`+
        ` \n`+
        `  #Front react \n`+
        `  front: \n`+
        `    container_name: front \n`+
        `    image: front-react \n`+
        `    build: \n`+
        `      context: . \n`+
        `      dockerfile: Dockerfilefront \n`+
        `    environment: \n`+
        `      - REACT_APP_WS_KEY=${key} \n`+
        `      - REACT_APP_WS_UID=${uid} \n`+
        `      - REACT_APP_TITLE=${name} \n`+
        `      - REACT_APP_COLOR=${color} \n`+
        `      - REACT_APP_WS_URL=http://localhost:80 \n`+
        `      - REACT_APP_VAPI=v1 \n`+
        `    restart: unless-stopped \n`+
        `    depends_on: \n`+
        `      - appnode \n`+
        `    ports: \n`+
        `      - "3000:3000" \n`+
        `    networks: \n`+
        `      - net${uid} \n`+
        `     \n`+
        `     \n`+
        `#network \n`+
        `networks: \n`+
        `  net${uid}: \n`+
        `    driver: bridge`;

        const fs = require('fs');
        let bs = `dockerfiles/project_${uid}`;


        fs.mkdir(Application.publicPath(`${bs}`), { recursive: true }, (err) => {
            if (err) throw err;
        });

        fs.writeFile(Application.publicPath(`${bs}/docker-compose.yml`), dk, error => {
        if (error)
            console.log(error);
        else
            console.log('docker-compose create');
        });

        let dockernode = Application.publicPath(`docker/Dockerfilenode`)
        let dockerserver = Application.publicPath(`docker/Dockerfileserver`)
        let confserver = Application.publicPath(`docker/nginx.conf`)
        let dkcompose = Application.publicPath(`${bs}/docker-compose.yml`);


        
        response.redirect(
            Route.makeUrl('app.show', { params: { project_id: project.id } })
        )
        

        return {name, color, url_logo, db_name, db_user, db_password, uid, key, dockernode, dockerserver, confserver, dkcompose}
    }


    //vista de ver proyecto base (BOX)
    public async show ({ params, view }: HttpContextContract) {

        const project = await Project.findOrFail(params.project_id)

        let bs = `dockerfiles/project_${project.uid}`;
        let dockernode = `/docker/Dockerfilenode`
        let dockerserver = `/docker/Dockerfileserver`
        let confserver = `/docker/nginx.conf`
        let dkcompose = `/${bs}/docker-compose.yml`
        let dkzip = '#';

        const fs = require('fs');
        const archiver = require('archiver');

        let output = fs.createWriteStream(Application.publicPath(`${bs}/resources.zip`));
        let archive = archiver('zip');

        output.on('close', function() {
            console.log(archive.pointer() + ' total bytes');
            console.log('archiver has been finalized and the output file descriptor has closed.');
        });
        output.on('end', function() {
            console.log('Data has been drained');
            
        })
        archive.pipe(output);
        archive.directory(Application.publicPath('docker'), false);
        archive.file(Application.publicPath(`${bs}/docker-compose.yml`), {name: 'docker-compose.yml'});
        archive.finalize();
        dkzip = `/${bs}/resources.zip`;
        //return params.project_id;
        return view.render('app/show', {project, dockernode, dockerserver, confserver, dkcompose, dkzip})
    }
}
