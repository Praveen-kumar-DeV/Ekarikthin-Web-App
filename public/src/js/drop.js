

window.onload = function menu () {

 
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
      "BeatBox":"CULT_BB",
     
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
     "Penalty Shootout":"SPT_PS",
      "Gully Cricket": "SPT_GC",
      Badminton: "SPT_BD",
      "Mountain Biking": "SPT_MB",
    },
    minievents: {
      "Treasure Hunt": "MNE_TH",
      "Painting": "MNE_WP",
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
    CULT_RITZY: 600,
    CULT_RV: 2500,
    CULT_VOE: 400,
    CULT_DTGS: 300,
    CULT_DTGC: 600,
    CULT_BB: 300,
    TEC_RR: 400,
    TEC_TM:50,
    TEC_CC: 500,
    TEC_WD: 400,
    TEC_LD: 50,
    TEC_CWC: 100,
    TEC_AI: 150,
    TEC_SB: 50,
    TEC_QB: 50,
    ESP_BGMI: 600,
    ESP_CSGO: 600,
    ESP_ML: 600,
    SPT_TT: 500,
    SPT_VOL: 800,
    SPT_GC: 500,
    SPT_PS: 600,
    SPT_BD: 400,
    SPT_MB: 500,
    MNE_TH: 50,
    MNE_WP: 50,
    MNE_RG: 50,
    MNE_SV: 150,
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
        "Agile Ideas",
      "Robo Race",
      
      "CodeCast",
      "Web Design",
   
      "Spell Bee",
      "Typing Master",
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
      
      "Volleyball",
      "Gully Cricket",
      "Penalty Shootout",
      "Badminton",
  
    ],
    MiniEvents: [
      "Select Event",
      "Treasure Hunt",
      "Painting",
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
     
        