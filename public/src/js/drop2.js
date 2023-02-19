

window.onload = function menu () {

  const stateObject = {
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
    "Dance Battle": "CULT_DB",
  },
  technical: [
    "Mud Race",
    "Pick N Place",
    "CodeCast",
    "Web Design",
    "Logo Designing",
    "CIVIL WITH CIVICUS",
    "Stockraze",
    "Virgowords",
    "Quiz Buzz",
],
  esports: [
    "COD",
    "BGMI",
    "CSGO",
    "DOTA 2",
    "Mobile legends",
  ],
  sports: [
    "Table Tennis",
    "Volleyball",
    "Roadies",
    "Gully Cricket",
    "Chess",
    "Futsal",
    "Badminton",
    "Mountain Biking",
  ],
  'mini events': [
    "Treasure Hunt",
    "Wall Painting",
    "PIC Of the Day",
    "EDM",
    "Rangoli Competition",
    "Shipwreck",
    "Face Painting",
    "Short Film Contest",
    "Arm Wrestling",
    "Kavi Sammelan",
    "Instagram Photo Likes Contest",
  ],
};

//--------------------drop down------------------
const eventCodes = {
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
    "Dance Battle": "CULT_DB",
  },
  technical: {
    "Mud Race": "TEC_MR",
    "Pick N Place": "TEC_PNP",
    CodeCast: "TEC_CC",
    "Web Design": "TEC_WD",
    "Logo Designing": "TEC_LD",
    "CIVIL WITH CIVICUS": "TEC_CWC",
    Stockraze: "TEC_STK",
    Virgowords: "TEC_VIR",
    "Quiz Buzz": "TEC_QB",
  },
  esports: {
    COD: "ESP_COD",
    BGMI: "ESP_BGMI",
    CSGO: "ESP_CSGO",
    "DOTA 2": "ESP_DOTA",
    "Mobile legends": "ESP_ML",
  },
  sports: {
    "Table Tennis": "SPT_TT",
    Volleyball: "SPT_VOL",
    Roadies: "SPT_RDS",
    "Gully Cricket": "SPT_GC",
    Chess: "SPT_CH",
    Futsal: "SPT_FTSL",
    Badminton: "SPT_BD",
    "Mountain Biking": "SPT_MB",
  },
  "mini events": {
    "Treasure Hunt": "MNE_TH",
    "Wall Painting": "MNE_WP",
    "PIC Of the Day": "MNE_PIC",
    EDM: "MNE_EDM",
    "Rangoli Competition": "MNE_RG",
    Shipwreck: "MNE_SW",
    "Face Painting": "MNE_FP",
    "Short Film Contest": "MNE_SFC",
    "Arm Wrestling": "MNE_AW",
    "Kavi Sammelan": "MNE_KS",
    "Instagram Photo Likes Contest": "MNE_IGLC",
  },
};

const eventCost = {
  CULT_CS: 400,
  CULT_CD: 700,
  CULT_CT: 1000,
  CULT_CG: 1300,
  CULT_RITZY: 500,
  CULT_RV: 2500,
  CULT_VOE: 300,
  CULT_DTGS: 200,
  CULT_DTGC: 800,
  CULT_DB: 300,
  TEC_MR: 0,
  TEC_PNP: 0,
  TEC_CC: 0,
  TEC_WD: 150,
  TEC_LD: 50,
  TEC_CWC: 100,
  TEC_STK: 100,
  TEC_VIR: 0,
  TEC_QB: 0,
  ESP_COD: 500,
  ESP_BGMI: 500,
  ESP_CSGO: 500,
  ESP_DOTA: 500,
  ESP_ML: 500,
  SPT_TT: 350,
  SPT_VOL: 600,
  SPT_RDS: 150,
  SPT_GC: 500,
  SPT_CH: 200,
  SPT_FTSL: 500,
  SPT_BD: 350,
  SPT_MB: 400,
  MNE_TH: 0,
  MNE_WP: 50,
  MNE_PIC: 0,
  MNE_EDM: 0,
  MNE_RG: 0,
  MNE_FP: 50,
  MNE_SW: 0,
  MNE_SFC: 200,
  MNE_AW: 100,
  MNE_KS: 0,
  MNE_IGLC: 0,
};


 const getEventCost = (category, event) =>
  eventCost[eventCodes[category.toLowerCase()][event]];

  
 const getEventCode = (category, event) =>
  eventCodes[category.toLowerCase()][event];
 

  jQuery(function($) {
    var locations = {
      Cultural:[ 
    "Cosplay - Solo",
    "Cosplay - Duo",
    "Cosplay - Trio",
    "Cosplay - Group",
    "Ritzy",
    "Rockville",
    "Voice of Ekarikthin",
    "Dance - Solo",
    "Dance - Crew",
    "Dance Battle",
    ],
    Technical: [
    "Mud Race",
    "Pick N Place",
    "CodeCast",
    "Web Design",
    "Logo Designing",
    "CIVIL WITH CIVICUS",
    "Stockraze",
    "Virgowords",
    "Quiz Buzz",
],
  Esports: [
    "COD",
    "BGMI",
    "CSGO",
    "DOTA 2",
    "Mobile legends",
  ],
  Sports: [
    "Table Tennis",
    "Volleyball",
    "Roadies",
    "Gully Cricket",
    "Chess",
    "Futsal",
    "Badminton",
    "Mountain Biking",
  ],
  MiniEvents: [
    "Treasure Hunt",
    "Wall Painting",
    "PIC Of the Day",
    "EDM",
    "Rangoli Competition",
    "Shipwreck",
    "Face Painting",
    "Short Film Contest",
    "Arm Wrestling",
    "Kavi Sammelan",
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
    $('#Event').click(function () {
      var eve = $(this).val(),cat=$("#category").val();
      $("#code").val(getEventCode(cat,eve));
      $("#cost").val(getEventCost(cat,eve));


    });
    var formd= new FormData();
console.log(formd);
    
});

 

}
   
      