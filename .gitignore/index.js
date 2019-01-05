const Discord = require('discord.js');
const client = new Discord.Client();

var bot = new Discord.Client();
var prefix = ("/");

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'Assister la OpTium', type: 0} });
    console.log("En marche !");

bot.login(process.env.TOKEN);


    if (message.content === prefix + `staff-commande`){
    if (message.member.hasPermission("MANAGE_MESSAGES"))
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__Staff Aide__" , "**Voici les commandes utile pour les __MovingZone__ !**\n /classement \n /start \n /start-18h00 \n /start-18h15 \n /start-18h30 \n /start-18h45 \n /start-19h00 \n /start-19h15 \n /start-19h30 \n /start-19h45 \n /start-20h00 \n /start-20h15 \n /start-20h30 \n /start-20h45 \n /start-21h00 \n /start-21h15 \n /start-21h30 \n /start-21h45 \n /start-22h00 \n /start-22h15 \n /start-22h30 \n /start-22h45 \n /start-23h00 \n /start-23h15 \n /start-23h30 \n /start-23h45 \n /start-24h00")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    }

    if (message.content === prefix + `start @MovingZone`){
    if (message.member.hasPermission("MANAGE_MESSAGES"))
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__MovingZone__" , "La **MovingZone** va bientôt commencer ! Soyez prêt à rejoindre le vocal !")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande start demandée !");
    }

    if (message.content === prefix + `classement`){
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__Classement__" , "__Classement *MovingZone Ranked* !__ \n 1. OpTium Louis | __**33** Points__ \n 2. ADAMIR | __**32** Points__ \n 3. OpTium_DryGen- | __**30** Points__ \n 4. OpTium Jules | __**29** Points__ \n 5. VIZual Azoks | __**17** Points_ \n 6. BOSS-Karai6 | __**15** Points__ \n 7. OpTium Sigma | __**11** Points__ \n 8. KZN | __**9** Points__ \n 9. Crimore | __**8** Points__ \n 10. Renegate Slim | __**5** Points__ \n 11. VIZual_FlasHH | __**4** Points__ \n 12. AFB SkYoTix | __**4** Points__")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande classement demandée !");
    }

    if (message.content === prefix + `start-19h45 @MovingZone`){
    if (message.member.hasPermission("MANAGE_MESSAGES"))
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__MovingZone__" , "La **MovingZone** va bientôt commencer ! Rendez-vous à 19h45 !")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
         console.log("Commande Help demandée !");
    }
        

    if (message.content === prefix + `start-20h00 @MovingZone`){
    if (message.member.hasPermission("MANAGE_MESSAGES"))
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__MovingZone__" , "La **MovingZone** va bientôt commencer ! Rendez-vous à 20h00 !")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    }
    if (message.content === prefix + `start-19h30 @MovingZone`){
    if (message.member.hasPermission("MANAGE_MESSAGES"))       
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__MovingZone__" , "La **MovingZone** va bientôt commencer ! Rendez-vous à 19h30 !")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");

        }    

    if (message.content === prefix + `start-19h15 @MovingZone`){
    if (message.member.hasPermission("MANAGE_MESSAGES"))       
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__MovingZone__" , "La **MovingZone** va bientôt commencer ! Rendez-vous à 19h15 !")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    }

    if (message.content === prefix + `start-19h00 @MovingZone`){
    if (message.member.hasPermission("MANAGE_MESSAGES"))       
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__MovingZone__" , "La **MovingZone** va bientôt commencer ! Rendez-vous à 19h00 !")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
                }

    if (message.content === prefix + `start-20h15 @MovingZone`){
    if (message.member.hasPermission("MANAGE_MESSAGES"))       
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__MovingZone__" , "La **MovingZone** va bientôt commencer ! Rendez-vous à 20h15 !")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    }

    if (message.content === prefix + `start-20h30 @MovingZone`){
    if (message.member.hasPermission("MANAGE_MESSAGES"))
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__MovingZone__" , "La **MovingZone** va bientôt commencer ! Rendez-vous à 20h30 !")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    }

    if (message.content === prefix + `start-20h45 @MovingZone`){
    if (message.member.hasPermission("MANAGE_MESSAGES"))
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__MovingZone__" , "La **MovingZone** va bientôt commencer ! Rendez-vous à 20h45 !")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    }

    if (message.content === prefix + `start-21h00 @MovingZone`){
    if (message.member.hasPermission("MANAGE_MESSAGES"))
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__MovingZone__" , "La **MovingZone** va bientôt commencer ! Rendez-vous à 21h00 !")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    }

    if (message.content === prefix + `start-21h15 @MovingZone`){
    if (message.member.hasPermission("MANAGE_MESSAGES"))
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__MovingZone__" , "La **MovingZone** va bientôt commencer ! Rendez-vous à 21h15 !")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    }

    if (message.content === prefix + `start-21h30 @MovingZone`){
    if (message.member.hasPermission("MANAGE_MESSAGES"))
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__MovingZone__" , "La **MovingZone** va bientôt commencer ! Rendez-vous à 21h30 !")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    }

    if (message.content === prefix + `start-21h45 @MovingZone`){
    if (message.member.hasPermission("MANAGE_MESSAGES"))
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__MovingZone__" , "La **MovingZone** va bientôt commencer ! Rendez-vous à 21h45 !")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    }

    if (message.content === prefix + `start-22h00 @MovingZone`){
    if (message.member.hasPermission("MANAGE_MESSAGES"))
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__MovingZone__" , "La **MovingZone** va bientôt commencer !  Rendez-vous à 22h00 !")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    }

    if (message.content === prefix + `start-22hh15 @MovingZone`){
    if (message.member.hasPermission("MANAGE_MESSAGES"))
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__MovingZone__" , "La **MovingZone** va bientôt commencer ! Rendez-vous à 22h15 !")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    }

    if (message.content === prefix + `start-22h30 @MovingZone`){
    if (message.member.hasPermission("MANAGE_MESSAGES"))
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__MovingZone__" , "La **MovingZone** va bientôt commencer ! Rendez-vous à 22h30 !")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    }

    if (message.content === prefix + `start-22h45 @MovingZone`){
    if (message.member.hasPermission("MANAGE_MESSAGES"))
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__MovingZone__" , "La **MovingZone** va bientôt commencer ! Rendez-vous à 22h45 !")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    }

    if (message.content === prefix + `start-23h00 @MovingZone`){
    if (message.member.hasPermission("MANAGE_MESSAGES"))
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__MovingZone__" , "La **MovingZone** va bientôt commencer ! Rendez-vous à 23h00 !")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    }

    if (message.content === prefix + `start-23h15 @MovingZone`){
    if (message.member.hasPermission("MANAGE_MESSAGES"))
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__MovingZone__" , "La **MovingZone** va bientôt commencer ! Rendez-vous à 23h15 !")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    }

    if (message.content === prefix + `start-23h30 @MovingZone`){
    if (message.member.hasPermission("MANAGE_MESSAGES"))
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__MovingZone__" , "La **MovingZone** va bientôt commencer !  Rendez-vous à 23h30 !")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    }

    if (message.content === prefix + `start-23h45 @MovingZone`){
    if (message.member.hasPermission("MANAGE_MESSAGES"))
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__MovingZone__" , "La **MovingZone** va bientôt commencer !  Rendez-vous à 23h45 !")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    }

    if (message.content === prefix + `start-24h00 @MovingZone`){
    if (message.member.hasPermission("MANAGE_MESSAGES"))
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__MovingZone__" , "La **MovingZone** va bientôt commencer !  Rendez-vous à minuit !")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    }

    if (message.content === prefix + `start-18h30 @MovingZone`){
    if (message.member.hasPermission("MANAGE_MESSAGES"))
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__MovingZone__" , "La **MovingZone** va bientôt commencer !  Rendez-vous à 18h30 !")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    }

        if (message.content === prefix + `start-18h45 @MovingZone`){
        if (message.member.hasPermission("MANAGE_MESSAGES"))
            var help_embed = new Discord.RichEmbed()
                .setColor('#C5370A')
                .addField("__MovingZone__" , "La **MovingZone** va bientôt commencer !  Rendez-vous à 18h45 !")
                .setFooter("Copyright 2018 © OpTium eSport")
            message.channel.sendEmbed(help_embed);
            //messagechannel
            console.log("Commande Help demandée !");

    }

    if (message.content === prefix + `start-18h15 @MovingZone`){
    if (message.member.hasPermission("MANAGE_MESSAGES"))
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__MovingZone__" , "La **MovingZone** va bientôt commencer !  Rendez-vous à 18h15 !")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");

    }

    if (message.content === prefix + `start-18h00 @MovingZone`){
    if (message.member.hasPermission("MANAGE_MESSAGES"))
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__MovingZone__" , "La **MovingZone** va bientôt commencer !  Rendez-vous à 18h00 !")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");

    }

    if (message.content === prefix + `aide`){
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__Aide aux Joueurs__" , "Vous voulez s'avoir le classement en **MovingZone Ranked** \n      \n __**/**classement !__")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    
    }

    if (message.content === prefix + `ffa`){
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__FFA__" , "Le **FFA** va bientôt commencer ! Bonne chance à tous !")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    
    }

    if (message.content === prefix + `ffa-explication`){
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__FFA__" , "Le **FFA** est un mode de jeu, Free For All, 16 joueurs (ou moins) sont dans une map plus ou moins grande et s'éliminent entre eux !")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    
    }

    if (message.content === prefix + `l'as de pique`){
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__L'AS DE PIQUE__" , "L'as de pique et une personne de **haute** importance pour le serveur vous le trouverez dans sa __taverne__ !")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    
    }


    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "rienrien":

        var userCreateDate = message.author.createdAt.toString().split(" ");
        var msauthor = message.author.id;

        var stats_embed = new Discord.RichEmbed()

        .setColor("#EC1016")
        .setTitle(`Statistiques de l'utilisateur : ${message.author.username}`)
        .addField(`Maintenance ...`, "C'est une commande en cours de développement juste l'id est envoyé !")
        .addField(`ID de l'utilisateur :id:`, msauthor, true)
        .setThumbnail(message.author.avatarURL)
        message.author.send({embed : stats_embed});
        break;
                     //CLEAR
                     case "clear":
                     if (message.member.hasPermission("MANAGE_MESSAGES")){
                         message.channel.fetchMessages()
                             .then(function(list){
                                 message.channel.bulkDelete(list);
                             }, function(err){message.channel.send("Erreur")})}
                     break;
        
        
     }

});
