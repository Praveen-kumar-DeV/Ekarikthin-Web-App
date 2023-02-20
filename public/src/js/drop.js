

window.onload = function menu () {

   /* const stateObject = {
    cultural: {
      "Cosplay - Solo": "CULT_CS",
      "Cosplay - Duo": "CULT_CD",
      "Cosplay - Trio": "CULT_CT",
      "Cosplay - Group": "CULT_CG",
      Ritzy: "CULT_RITZY",
      Rockville: "CULT_RV",
      "Voice of Ekarikthin": "CULT_VOE",
      "Dance - Solo": "CULT_DTGS",
      "Dance - Crew": "CULT_DTGC",
      
    },
    technical: [
      "Mud Race",
      
      "CodeCast",
      "Web Design",

      "Spell Bee",
      "Quiz Buzz",
  ],
    esports: [
     
      "BGMI",
      "CSGO",
      "Mobile legends",
    ],
    sports: [
      "Table Tennis",
      "Volleyball",
      "Gully Cricket",
      "Chess",
      "Futsal",
      "Badminton",
      "Mountain Biking",
    ],
    MiniEvents: [
      "Treasure Hunt",
      "Wall Painting",
      "Rangoli Competition",
      "Survivo",
      "Instagram Photo Likes Contest",
    ],
  };
  */
  //--------------------drop down------------------
  const eventCodes = {
    cultural: {
      "Cosplay - Solo": "CULT_CS",
      "Cosplay - Duo": "CULT_CD",
      "Cosplay - Trio": "CULT_CT",
      "Cosplay - Group": "CULT_CG",
       "Ritzy": "CULT_RITZY",
      "Rockville": "CULT_RV",
      "Voice of Ekarikthin": "CULT_VOE",
      "Dance - Solo": "CULT_DTGS",
      "Dance - Crew": "CULT_DTGC",
      "Beatbox":"CULT_BB",
     
    },
    technical: {
      "Robo Race": "TEC_RR",
       "Typing Master":"TEC_TM",
      "CodeCast": "TEC_CC",
      "Web Design": "TEC_WD",
     "Agile Ideas":"TEC_AI",

      "Spell Bee": "TEC_SB",
      "Quiz Buzz": "TEC_QB",
    },
    esports: {
     
      BGMI: "ESP_BGMI",
      CSGO: "ESP_CSGO",
      
      "Mobile legends": "ESP_ML",
    },
    sports: {
      "Table Tennis": "SPT_TT",
          Volleyball: "SPT_VOL",
     "Penalty Shoot out":"SPT_PS",
      "Gully Cricket": "SPT_GC",
      Badminton: "SPT_BD",
      "Mountain Biking": "SPT_MB",
    },
    minievents: {
      "Treasure Hunt": "MNE_TH",
      "Wall Painting": "MNE_WP",
      "Rangoli Competition": "MNE_RG",
      "Survivo": "MNE_SV",
      "Instagram Photo Likes Contest": "MNE_IGLC",
    },
  };
  
  const eventCost = {
    CULT_CS: 400,
    CULT_CD: 700,
    CULT_CT: 1000,
    CULT_CG: 1300,
    CULT_RITZY: 500,
    CULT_RV: 3000,
    CULT_VOE: 300,
    CULT_DTGS: 300,
    CULT_DTGC: 500,
    CULT_BB: 300,
    TEC_RR: 50,
    TEC_TM:50,
    TEC_CC: 500,
    TEC_WD: 300,
    TEC_LD: 50,
    TEC_CWC: 100,
    TEC_AI: 150,
    TEC_SB: 0,
    TEC_QB: 0,
    ESP_BGMI: 600,
    ESP_CSGO: 600,
    ESP_ML: 600,
    SPT_TT: 500,
    SPT_VOL: 800,
    SPT_GC: 800,
    SPT_PS: 600,
    SPT_BD: 400,
    SPT_MB: 500,
    MNE_TH: 0,
    MNE_WP: 50,
    MNE_RG: 0,
    MNE_SV: 0,
    MNE_IGLC: 0,
  };
  
  const getEventCost = (category, event) =>
    eventCost[eventCodes[category.toLowerCase()][event]];
  

  const getEventCode = (category, event) =>
    eventCodes[category.toLowerCase()][event];
   
  
  //---------------------------------------------------
  
    jQuery(function($) {
      var locations = {
        Cultural:[ 
          "Select Event",
      "Cosplay - Solo",
      "Cosplay - Duo",
      "Cosplay - Trio",
      "Cosplay - Group",
      "Ritzy",
      "Rockville",
      "Voice of Ekarikthin",
      "Dance - Solo",
      "Dance - Crew",
      "BeatBox",  
      ],
      Technical: [
        "Select Event",
      "Robo Race",
      
      "CodeCast",
      "Web Design",
   
      "Spell Bee",
      "Quiz Buzz",
  ],
    Esports: [
      "Select Event",
      "BGMI",
      "CSGO",
      "Mobile legends",
    ],
    Sports: [
      "Select Event",
      "Table Tennis",
      "Volleyball",
      "Gully Cricket",
      "Penalty Shootout",
      "Badminton",
      "Mountain Biking",
    ],
    MiniEvents: [
      "Select Event",
      "Treasure Hunt",
      "Wall Painting",
      "Survivo",
      "Rangoli Competition",
      "Instagram Photo Likes Contest",
    ],
  };
      
      
      var $locations = $('#Event');
      $('#category').change(function () {
          var country = $(this).val(), lcns = locations[country] || [];
          
          var html = $.map(lcns, function(lcn){
              return '<option value="' + lcn + '">' + lcn + '</option>'
          }).join('');
          $locations.html(html)
      });
      $('#Event').change(function () {
        var eve = $(this).val(),cat=$("#category").val();
       
        $("#code").val(getEventCode(cat,eve));
       
        $("#cost").val(getEventCost(cat,eve));


  
      });
     
      
  });
  
   
  
  }
     
        