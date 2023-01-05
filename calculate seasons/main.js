let season = prompt("Ay daxil edin");

function checkSeason (season) {
  switch(season) {
    case "12":
      console.log ("Dekabr " + " Qish");
      break;
      case "11":
        console.log ("Noyabr " + " Payiz");
        break;
        case "10":
        console.log ("Oktyabr " + " Payiz");
        case "9":
          console.log ("Sentyabr " + " Payiz");
          break;
          case "8":
            console.log ("Avqust " + " Yay");
            break;
            case "7":
            console.log ("Iyul " + " Yay");
            case "6":
              console.log ("Iyun " + " Yay");
              break;
              case "5":
                console.log ("May " + " Yaz");
                break;
                case "4":
                console.log ("Aprel " + " Yaz");
                case "3":
                  console.log ("Mart " + " Yaz");
                  break;
                  case "2":
                    console.log ("Fevral " + " Qish");
                    break;
                    case "1":
                    console.log ("Yanvar " + " Qish");
                    break;
                    default: 
                    console.log ("Bele fesil yoxdur");
  }
}
checkSeason(season);
