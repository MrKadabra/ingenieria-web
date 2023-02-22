function getZodiac(){
  var date = document.getElementById("date").value;
  var month = date.substring(5,7);
  var day = date.substring(8,10);
  if ((month == 12 && day >= 22 && day <= 31) || (month == 01 && day >= 01 && day <= 20)){
    document.getElementById("zodiac").innerHTML = "Eres el caballero Capricornio";
  } else if ((month == 01 && day >= 21 && day <= 31) || (month == 02 && day >= 01 && day <= 18)){
      document.getElementById("zodiac").innerHTML = "Eres el caballero Acuario";
  } else if ((month == 02 && day >= 19 && day <= 28) || (month == 03 && day >= 01 && day <= 20)){
      document.getElementById("zodiac").innerHTML = "Eres el caballero Piscis";
  } else if ((month == 03 && day >= 21 && day <= 31) || (month == 04 && day >= 01 && day <= 20)){
      document.getElementById("zodiac").innerHTML = "Eres el caballero Aries";
  } else if ((month == 04 && day >= 21 && day <= 30) || (month == 05 && day >= 01 && day <= 21)){
      document.getElementById("zodiac").innerHTML = "Eres el caballero Tauro";
  } else if ((month == 05 && day >= 22 && day <= 31) || (month == 06 && day >= 01 && day <= 21)){
      document.getElementById("zodiac").innerHTML = "Eres el caballero Géminis";
  } else if ((month == 06 && day >= 22 && day <= 30) || (month == 07 && day >= 01 && day <= 22)){
      document.getElementById("zodiac").innerHTML = "Eres el caballero Cáncer";
  } else if ((month == 07 && day >= 23 && day <= 31) || (month == 08 && day >= 01 && day <= 23)){
      document.getElementById("zodiac").innerHTML = "Eres el caballero Leo";
  } else if ((month == 08 && day >= 24 && day <= 31) || (month == 09 && day >= 01 && day <= 23)){
      document.getElementById("zodiac").innerHTML = "Eres el caballero Virgo";
  } else if ((month == 09 && day >= 24 && day <= 30) || (month == 10 && day >= 01 && day <= 23)){
      document.getElementById("zodiac").innerHTML = "Eres el caballero Libra";
  } else if ((month == 10 && day >= 24 && day <= 31) || (month == 11 && day >= 01 && day <= 22)){
      document.getElementById("zodiac").innerHTML = "Eres el caballero Escorpio";
  } else if ((month == 11 && day >= 23 && day <= 30) || (month == 12 && day >= 01 && day <= 21)){
      document.getElementById("zodiac").innerHTML = "Eres el caballero Sagitario";
  }
}