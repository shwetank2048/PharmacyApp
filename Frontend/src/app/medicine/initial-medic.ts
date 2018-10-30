export class Init {
  load() {
    if (localStorage.getItem('medics') === null || localStorage.getItem('medics') == undefined) {
      console.log("Creating the initial set of medics ...");
      var medi = [
        {
          id: 1,
          name: "Paracetamol",
          company: "Ranbaxy",

          manufacturingDate: "21-Apr-2015",
          expiryDate: "21-Apr-2020",
          price: 1253.2

        },
        {
          id: 2,
          name: "Soframicine",
          company: "ViaMedico",

          manufacturingDate: "1-Aug-2015",
          expiryDate: "21-Apr-2017",
          price: 120.2

        },
        {
          id: 3,
          name: "Entroquinol",
          company: "AyurvedMedics",

          manufacturingDate: "22-Feb-2016",
          expiryDate: "21-Apr-2025",
          price: 100

        }
      ];
      localStorage.setItem('medics', JSON.stringify(medi));
    }
    else {
      console.log("Loaded the medics from local storage ...");
    }
  }
}
