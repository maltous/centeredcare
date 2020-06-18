function ExecuteScript(strId)
{
  switch (strId)
  {
      case "636ma4cWAPD":
        Script1();
        break;
      case "5alb4E9QwjJ":
        Script2();
        break;
      case "6NF5CrtIJ7p":
        Script3();
        break;
      case "6WjiEow10MW":
        Script4();
        break;
      case "5lvXpWQUCba":
        Script5();
        break;
      case "5qtB5P0plBa":
        Script6();
        break;
      case "602jZtVOoa4":
        Script7();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  $("#tab-customlink").hide();
}

function Script3()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script6()
{
  $("#tab-customlink").show();
}

function Script7()
{
  window.print();
}

