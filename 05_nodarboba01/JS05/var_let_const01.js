console.log("Izdruka pirms bloka, mainīgā a vērtība - " + a);
      {
        var a = 10;
        console.log("Izdruka no bloka, mainīgā a vērtība - " + a);
        {
          var a = 20;
          console.log("Izdruka no apakšbloka, mainīgā a vērtība - " + a);
        }
      }
      a = a * a;
      console.log("Izdruka pēc bloka, mainīgā a vērtība - " + a);

 //console.log("Izdruka pirms bloka, mainīgā b vērtība - " + b);
 {
        let b = 10;
        console.log("Izdruka no bloka (pirms apakšbloka), mainīgā b vērtība - " + b);
        {
          let b = 30;
          console.log("Izdruka no apakšbloka, mainīgā b vērtība - " + b);
        }
        console.log("Izdruka no bloka (pēc apakšbloka), mainīgā b vērtība - " + b);
      }
      //b = b*b;
      //console.log("Izdruka pēc bloka, mainīgā b vērtība - " + b);

      