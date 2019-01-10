import { Component, OnInit } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { LogInPage } from '../login/login';
import { NavController } from 'ionic-angular';
import {AutoService } from '../../providers/auto.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'page-home',
  templateUrl: 'questions.html'
})
export class QuestionsPage implements OnInit{

  defaultQuestions = [
    {
        question: "The branch of physics that deals with motion of bodies with reference to the force responsible for the motion is called_________",
        choiceA: "mechanics",
        choiceB: "statics",
        choiceC: "dynamics",
        choiceD: "kinematics",
        correct: "A"
    },
    {
        question: "The magnitude of the acceleration of a moving object is equal to the?",
        choiceA: "gradient of a displacement time graph",
        choiceB: "gradient of a velocity time graph",
        choiceC: "area below a displacement time graph",
        choiceD: "area below a velocity time graph",
        correct: "D"
    },
    {
        question: "A car of mass 1.40*10^5kg being towel has a net forward force of 4.50*10^3N applied to it. The car starts from rest and travels down a horizontal highway. Find the speed of the car after it has travelled 100.0m (ignore kinetic energy losses caused by friction and air resistace)?",
        choiceA: "45.0m/s",
        choiceB: "25.4m/s",
        choiceC: "12.8m/s",
        choiceD: "25.4m/s",
        correct: "C"
    },
    {
        question: "An object of mass 1kg falls from rest through a height of the ground. It is stopped after penetrate 7.5cm of sand. Calculate the average resistive force offered by the sand?",
        choiceA: "100N",
        choiceB: "1000N",
        choiceC: "10N",
        choiceD: "50N",
        correct: "A"
    },
    {
        question: "Three blocks are connected and pulled to the right on horizontal frictionless table by a force with a magnitude of T3 = 65.0N. If m1=12kg, m2=24kg, m3=31kg. Calculate the acceleration of the system and the tension T1 and T2.?",
        choiceA: "0.78m/s^2, 11.62N and 24.9N",
        choiceB: "0.97m/s^2, 11.62N and 34.9N",
        choiceC: "2m/s^2, 8N and 42N",
        choiceD: "0.97m/s^2. 11.62N and 34.9N",
        correct: "C"
    },
    {
        question:"A rope is being used to pull a mass of 20kg vertically upward. Determine the tension in the rope of, starting from rest, the acquires a velocity of 4m/s^2 in 12s",
        choiceA:"207N",
        choiceB:"270N",
        choiceC:"800N",
        choiceD:"2.70N",
        correct:"D"
    },
    {
        question:"Masses 3kg and 8kg connected by a cord are suspended over a frictionless pulley. What is their acceleration when released?",
        choiceA:"4.5m/s",
        choiceB:"4.5m/s^2",
        choiceC:"2.45m/s",
        choiceD:"2.45m/s^2",
        correct:"D",
    },
    {
        question:"Calculate the force of attraction between two masses, one of 5kg and one of 8kg whose center are 10cm apart.",
        choiceA:"2.67x10^7N",
        choiceB:"2.67x10^34N",
        choiceC:"2.67x10^-36N",
        choiceD:"2.76x10^7N",
        correct:"B"
     },
     {
        question:"If the radius of the earth is 6.4x106m, the escape velocity of a satellite from the earth is",
        choiceA:"8x103m/s",
        choiceB:"11.3x10^-4 m/s",
        choiceC:"1.13x10^-4m/s",
        choiceD:"1.13x10^4m/s",
        correct:"D"
       },
    {
        question:"A satellite of mass m, moves in a circular orbit about earth with a constant speed and height 1000km above earth surface. Find the orbital speed of the satellite. (Earth radius is 6.38x10^6m and its mass is 5.98x10^24kg, the gravitational constant is 6.67x10^-11)",
        choiceA:"7.35x10^3m/s",
        choiceB:"5.40x10^3m/s",
        choiceC:"1.65x10^3m/s",
        choiceD:"1.0x10^3m/s.",
        correct:"C"
    },
    {
        question:"A pump lifts water from a lake to a large tank 20m above the lake. How much work against gravity does the pump do as it transfers 5.0m^3 of water to the tank? One cubic meter of water has a mass 1000kg",
        choiceA:"9.8x10^5J",
        choiceB:"9.8x10^6J",
        choiceC:"9.8x10^3J",
        choiceD:"9.8x10^2J",
        correct:"A"
      },
    {
        question:"The turning effect of a force about an axis is called I- Torque II- Equilibrium III- Moment of the force",
        choiceA:"I only",
        choiceB:"II & III only",
        choiceC:"III only",
        choiceD:"I & III only",
        correct:"C"
     },
    {
        question:"On a uniform beam 5m hangs a mass 30kg at one end, the beam then balances at a point 1.5m from this end. Find the mass of the beam. (g= 10m/s^2).",
        choiceA:"45kg",
        choiceB:"50g",
        choiceC:"200g",
        choiceD:"1000g",
        correct:"D"
    },
    {
        question:"Two equal parallel forces of magnitude 15N are applied to a rod. Determine the distance x between the forces if they are provided a net torque of 18Nm.",
        choiceA:"1.2m",
        choiceB:"2.0m",
        choiceC:"5.0m",
        choiceD:"1.0m",
        correct:"B"
    },
    {
        question:"The melting point of naphthalene is 351k. What is its equivalent in Celsius",
        choiceA:"870C",
        choiceB:"620C",
        choiceC:"780C",
        choiceD:"970C",
        correct:"B"
     },
    {
        question:"A steel wire 10m long and with a cross-sectional area of 0.01cm^2 is living from a support and a mass of 5kg is living from its end. Calculate the new longest of the wire. The young modules for steel = 210 Gpa",
        choiceA:"10.0024m",
        choiceB:"100.024m",
        choiceC:"10.0024m^2",
        choiceD:"100.024m^2",
        correct:"C"
     },
     {
         question:"Find the increase in pressure that is required to decrease the volume 1m^2 of water by 10^-4m^3, if the bulk modules of water is 2x10^9N m^-3",
         choiceA:"2x10^3 pa",
         choiceB:"2x10^4Nm^-3",
         choiceC:"2x10^5 pa",
         choiceD:"2x10^5Nm^-3",
         correct:"D"
      },
      {
            question:"A glass fibre of diameter 12um is found to break under a load of 12g. Determine the breaking stress of the fibre.",
            choiceA:"1.04x10aNm^-2",
            choiceB:"1.02x10aNm^-2",
            choiceC:"1.4x10a Nm^-2",
            choiceD:"1.2x10aNm^-2",
            correct:"A"
      },
      {
        question:"A sphere of radius ‘a’ moving with a velocity u under streaming conditions in a viscous fluid experiences a retarding force given by f= kav, where K is a constant. The dimension of K are: ",
        choiceA:"ML^-2 T^-1",
        choiceB:"ML^-2 T^-2",
        choiceC:"ML^-2 T^-1",
        choiceD:"MLT^-1",
        correct:"C"
       },
       {
        question:"Which of the following is the dimensions of pressure?",
        choiceA:"ML^-1T^-2",
        choiceB:"MLT^-2",
        choiceC:"ML^2T^-3",
        choiceD:"ML-3",
        correct:"B"
        },
        {
        question:"At what respective values of x,y and z would the unit of force, the Newton, be dimensionally equivalent to M^xL^yT^z?",
        choiceA:"-1,1,2",
        choiceB:"1,1,-2",
        choiceC:"1,-1,2",
        choiceD:"-1,1,-2",
        correct:"D"
        },
        {
        question:"For which of the underlisted quantities is the derived unit ML^2T^-2 correct? i. Moment of force  ii. Work iii. Acceleration",
        choiceA:"I only",
        choiceB:"II only",
        choiceC:"I & II",
        choiceD:"II&III",
        correct:"B"
        },
        {
        question:"What is the percentage reading error in measuring a distance of 5.00cm using a meter rule marked in mm?",
        choiceA:"0.0%",
        choiceB:"5.0%",
        choiceC:"1.0%",
        choiceD:"0.5%",
        correct:"A"
        },
        {
            question:"The external and internal diameters of a tube are measured at [32+-2]mm and [21+-1]mm respectively. Determine the percentage error in the thickness of the tube.",
            choiceA:"27%",
            choiceB:"14%",
            choiceC:"9%",
            choiceD:"3%",
            correct:"B"
          },
        {
            question:"The speed c of ocean waves is proportional to the acceleration due to gravity g, wavelength, and density, of the wave such that c=kg^xH^y P^z , where k is a dimensionless constant. The correct equation for the speed of ocean wave is…….",
            choiceA:"c=k√gH",
            choiceB:"c=√kgHp",
            choiceC:"k√gHp",
            choiceD:"c=kg^2H^2p^2",
            correct:"B"
          },
        {
            question:"Which of this is odd?",
            choiceA:"Stress",
            choiceB:"Strain",
            choiceC:"Pressure",
            choiceD:"Young modulus",
            correct:"C"
          },
        {
            question:"An example of scalar quantity is",
            choiceA:"Velocity",
            choiceB:"Weight",
            choiceC:"Electric charge",
            choiceD:"Momentum",
            correct:"B"
          },
        {
            question:"Which of the following is a set of vectors?",
            choiceA:"Force, mass and moment",
            choiceB:"Acceleration, velocity and moment",
            choiceC:"Mass, weight and density",
            choiceD:"Mass, weight and density",
            correct:"B"
          },
        {
            question:"Which of the following physical properties is not a vector?",
            choiceA:"Velocity",
            choiceB:"Work",
            choiceC:"Force",
            choiceD:"Electric field intensity",
            correct:"C"
         },
         {
            question:"Which of the following quantities are scalar? i. Electric potential ii.Torque iii.Momentum iv. Kinetic energy",
            choiceA:"ii&iii",
            choiceB:"i &ii",
            choiceC:"iii&iv",
            choiceD:"I &iv only",
            correct:"B"
           },
        {
            question:"Which of the following is not a vector quantity?",
            choiceA:"Force",
            choiceB:"Altitude",
            choiceC:"Weight",
            choiceD:"Displacement",
            correct:"B"
          },
        {
            question:"Which of the following is a vector quantity?",
            choiceA:"Time",
            choiceB:"Mass",
            choiceC:"Current",
            choiceD:"Current density",
            correct:"D"
          },
        {
            question:"Which of these quantities are vectors? I. Moment II. Temperature gradient III. Density IV.Temperature",
            choiceA:"II, III&IV",
            choiceB:"I&IV",
            choiceC:"II&III",
            choiceD:"I&II",
            correct:"D"
          },
        {
            question:"Which of the following physical quantities is a scalar?",
            choiceA:"Electric field intensity",
            choiceB:"Magnetic flux density",
            choiceC:"Electric potential",
            choiceD:"Gravitational field intensity",
            correct:"C" 
        },
        {
            question:"Which of the following sets consist entirely of a scalar quantities?",
            choiceA:"Impulse, mass and magnetic flux",
            choiceB:"Speed,momentum and distance",
            choiceC:"Displacement, electric field and energy",
            choiceD:"Pressure,work and electric potential",
            correct:"B"
            },
        {
            question:"Which of the following are scalar quantities? I. Momentum II.Energy III.Mechanical advantage IV.Thrust",
            choiceA:"I&II only",
            choiceB:"I&IV only",
            choiceC:"II&III only",
            choiceD:"II&IV only",
            correct:"B"
         },
         {
            question:"A single force which produces the same effect as a set of forces acting together at a point is known as the",
            choiceA:"Component",
            choiceB:"Equilibrant",
            choiceC:"Resultant",
            choiceD:"Resistant",
            correct:"D"
          },
          {
            question:"During the same interval, it is observed that a train travels the same distance as does a lorry. The two vehicles therefore have the same",
            choiceA:"Uniform acceleration",
            choiceB:"Instantaneous velocity",
            choiceC:"Initial velocity",
            choiceD:"Average velocity",
            correct:"B"
           },
           {
            question:"A moving object has a uniform acceleration if its",
            choiceA:"Displacement increases at a constant rate",
            choiceB:"Speed is directly proportional to time",
            choiceC:"Velocity varies inversely with time",
            choiceD:"Velocity increases by equal amounts in equal time intervals",
            correct:"C"
            },
            {
            question:"The unit of gravitational constant is",
            choiceA:"Nm^2/kg",
            choiceB:"Kg/Nm",
            choiceC:"Nm^2Kg^-2",
            choiceD:"Kg^2Nm^2",
            correct:"B"
             },
            {
            question:"A communicate satellite is to be placed into a circular orbit 800km above the space of the earth. If radius of earth is given as 6.34mm and mass of earth is 5.98x10^27g, determine it centripetal acceleration.",
            choiceA:"7.54m/s^2",
            choiceB:"47.5m/s^2",
            choiceC:"7.74x10x10m2",
            choiceD:"8.32m/s^2",
            correct:"B"
             },
            {
            question:"A 5kg body at rest is acted upon by a force of 20N for 20 millisecond. The increase in momentum and the final speed of the body respectively are",
            choiceA:"4Ns and 8m/s",
            choiceB:"0.4Ns and 0.8m/s",
            choiceC:"0.4Ns and 0.08m/s",
            choiceD:"4Ns and 0.8m/s",
            correct:"C"
              },
            {
            question:"A ball of mass 60g falling vertically strikes the ground with a velocity of 15m/s and rebounds vertically with a velocity of 5m/s. calculate the impulse which the ball receives from the ground.",
            choiceA:"0.6Ns",
            choiceB:"0.06Ns",
            choiceC:"1.2Ns",
            choiceD:"0.15Ns",
            correct:"D"
             },
            {
            question:"A body falls from rest to the ground in 0.5s. Calculate the height from which it falls.  (Take g=10m/s^2)",
            choiceA:"0.125m",
            choiceB:"0.5m",
            choiceC:"1.25m",
            choiceD:"2.25m",
            correct:"D"
             },
            {
            question:"An object A of mass 5kg is moving with a velocity of 10m/s and collides head on with an object B of mass 2kg moving in the opposite direction with a velocity of 5m/s. after collision both objects coalesced, so that they move with common velocity V which equals ______",
            choiceA:"4.7m/s",
            choiceB:"5.7m/s",
            choiceC:"7.4m/s",
            choiceD:"6.0m/s",
            correct:"B"
              },
            {
            question:"A smoker ball A of mass 0.7kg moving with velocity of 9m/s hits a stationary ball B of mass 0.8kg. After collision, B moves off with a velocity of 6m/s at 300 to the initial direction of A. Find the velocity V of A and its direction after hitting B.",
            choiceA:"2.3m/s at 600",
            choiceB:"3.2m/s at 300",
            choiceC:"5m/s at 480",
            choiceD:"7.4m/s at 700",
            correct:"A"
              },
            {
            question:"A hockey punk B rests on a smooth surface and is struck by a second punk A that was originally travelling at 30m/s. after collision, A is deflected through 450 from its original direction, while B is deflected through 600. Determine the fraction of original kinetic energy lost by the punk A.",
            choiceA:"0.196",
            choiceB:"2.34",
            choiceC:"0.89",
            choiceD:"0.63",
            correct:"A" 
            },
            {
            question:"A block weighing 40N rests on a flat surface and a horizontal force P of 2N is exerted on it. Determine the frictional force on the block.",
            choiceA:"0.2N",
            choiceB:"0.02N",
            choiceC:"2.7N",
            choiceD:"2.0N",
            correct:"B"
              },
            {
            question:"A block of mass 5kg is released from rest on a frictionless incline plane at an angle of 450 with the horizontal. What is the acceleration down the plane?",
            choiceA:"4.9m/s^2",
            choiceB:"0m/s^2",
            choiceC:"6.9m/s^2",
            choiceD:"12.0m/s^2",
            correct:"C"
             },
             {
            question:"A metal rod of young’s modules 2x10^10 Nm^-2  undergoes an elastic strain of 0.06% the energy per unit volume  stored in 1m^3 is:",
            choiceA:"3600",
            choiceB:"7200",
            choiceC:"10800",
            choiceD:"14400",
            correct:"B"
              },
            {
            question:"Gravel is dropped on to conveyor belt at rate of 0.5kg5-1. The extra force in neutrons required keeping the belt moving at 2m5-1 is",
            choiceA:"1",
            choiceB:"2",
            choiceC:"4",
            choiceD:"5",
            correct:"D"
               },
            {
            question:"Determine the upthrust on the iron cube of volume 400cm^3 if is totally immersed in water of density 1g/cm^3",
            choiceA:"3.2 N",
            choiceB:"4N",
            choiceC:"4.2N",
            choiceD:"3N",
            correct:"C"
             },
            {
            question:"Oil of density 0.8g1cm^3",
            choiceA:"3.2 N",
            choiceB:"4N",
            choiceC:"4.2N",
            choiceD:"3N",
            correct:"B"
             },
            {
            question:"A solid lead sphere of volume 0.50m^3 is dropped in the ocean to a depth of about 2000m where the pressure increases by 2.0x10^7 pa. lead has a bulk modules of 7.7 x 10^9 pa. What is the decrease in volume of the sphere?",
            choiceA:"10.13m^3",
            choiceB:"0.013m^3",
            choiceC:"0.0013m^3",
            choiceD:"0.00013m^3",
            correct:"C"
             },
            {
            question:"A vertical steel beam in a building supports a load of 60000N. If the length of the beam is 4.0m and its cross-sectional area is 0.008m^2. find the distance it is compressed along its length (young modules of steel = 2.0x10^11 pa)",
            choiceA:"0.00015m",
            choiceB:"0.0015m",
            choiceC:"0.015m",
            choiceD:"0.15m",
            correct:"C"
            },
            {
            question:"Calculate the energy stored in a string of length 20cm which extends to 24cm mile it supports a weight of 50N",
            choiceA:"10 J",
            choiceB:"100 J",
            choiceC:"1000 J",
            choiceD:"1 J",
            correct:"B"
             },
            {
            question:"The diameter of a steel play is 2.5cm at 250c. If the liner expansively of steel is 1.2x10^-5k^-1, calculate the temperature all which the paly will fit exactly into a hole of constant diameter 2.499cm",
            choiceA:"33.30c",
            choiceB:"8.30c",
            choiceC:"3.330c",
            choiceD:"0.830c",
            correct:"D"
             },
            {
            question:"A constant pressure thermometer has a volume of 815cm3 at 1000c and 200cm3 at 0c. Determine the temperature when the volume is 620cm3",
            choiceA:"6.830C",
            choiceB:"0.6830C",
            choiceC:"68.30c",
            choiceD:"6830c",
            correct:"A"
            },
            {
            question:"A total of 500g of lead shot is heated to 1000c and dropped into a 100g copper can containing 150g of heater of at 150c. If the mixture is stirred well, what is the equilibrium temperature. The specific heats of copper and lead are 0.093j/g/c and 0.031j/g/c",
            choiceA:"2.250c",
            choiceB:"0.2250c",
            choiceC:"22.50c",
            choiceD:"2250c",
            correct:"B"
             },
             {
            question:"The equilibrant of two or more concurrent forces is equal",
            choiceA:"To the difference in magnitude of the forces",
            choiceB:"In magnitude to the resultant but opposite in direction",
            choiceC:"To the sum of the magnitude of the forces",
            choiceD:"In magnitude and direction to the resultant",
            correct:"D"
               },
            {
            question:"In the diagram, P, Q and R are vectors. Which of the following options gives the correct relationship between the vectors?",
            choiceA:"P=Q+R",
            choiceB:"P=Q-R",
            choiceC:"P=R-Q",
            choiceD:"P+Q+R=0",
            correct:"A"
              },
            {
            question:"A speed of 75miles/hour when expressed in m/s is equal to",
            choiceA:"72m/s",
            choiceB:"30m/s",
            choiceC:"15.7m/s",
            choiceD:"33.5m/s",
            correct:"A"
              },
            {
            question:"The magnitude of the resultant of mutually perpendicular forces F1 and F2 is 13N. If the magnitude of F1 is 5N, what is the magnitude of F2?",
            choiceA:"2.6N",
            choiceB:"8.0N",
            choiceC:"12.0N",
            choiceD:"18.0N",
            correct:"D"
              },
            {
            question:"Two forces whose resultant is 100N are at right angles to each other. If one of them makes an angle of 30: with the resultant, determine its magnitude.",
            choiceA:"8.66N",
            choiceB:"50.0N",
            choiceC:"57.7N",
            choiceD:"86.6N",
            correct:"B"
              },
            {
            question:"A ball is moving at 18m/s in a direction inclined at 60: to the horizontal. The horizontal component of its velocity is?",
            choiceA:"9√3 m/s",
            choiceB:"6√3 m/s",
            choiceC:"6√4 m/s",
            choiceD:"9m/s",
            correct:"B"
            }   
                      


];

  noOfQuest = 15;
  num: number = 1;
  ranNum: number = 0;
  i: number = 1;
  min: number = 0;
  max: number = this.defaultQuestions.length;
  quest: any;
  answer: any;
  score: number = 0;
  hideFooterTimeout: any;
  qTime:  number = 3; // in minutes

  timeInSeconds: number;
  time: number;
  runTimer: boolean;
  hasStarted: boolean;
  hasFinished: boolean;
  remainingTime: number;
  displayTime: any;
  
  constructor(public navCtrl: NavController,
  public loadingCtrl: LoadingController,
    public auto: AutoService) {}

  ngOnInit () {
    this.quest = this.defaultQuestions[this.randomInt(this.min,      this.max)];
    this.initTimer();
    this. startTimer();
  }
 randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }
  goNext() {
    if(this.answer == this.quest.correct){
          this.score++;
    }
    this.randomInt(0, this.defaultQuestions.length);
    this.i += 1;
    this.quest = this.defaultQuestions[this.randomInt(this.min,      this.max)];


  }

select(option, ans){
  this.answer = ans;

}


initTimer() {
     // Pomodoro is usually for qTime minutes
    if (!this.timeInSeconds) { 
      this.timeInSeconds = this.qTime * 60; 
    }
  
    this.time = this.timeInSeconds;
    this.runTimer = false;
    this.hasStarted = false;
    this.hasFinished = false;
    this.remainingTime = this.timeInSeconds;
    
    this.displayTime = this.getSecondsAsDigitalClock(this.remainingTime);
  }
  
  startTimer() {
     this.runTimer = true;
    this.hasStarted = true;
    this.timerTick();
  }
  
  pauseTimer() {
    this.runTimer = false;
  }
  
  resumeTimer() {
    this.startTimer();
  }
  
  timerTick() {
    setTimeout(() => {
  
      if (!this.runTimer) { return; }
      this.remainingTime--;
      this.displayTime = this.getSecondsAsDigitalClock(this.remainingTime);
      if (this.remainingTime > 0) {
        this.timerTick();
      }
      else {
        this.i = this.noOfQuest + 1;
        this.hasFinished = true;
      }
    }, 1000);
  }
  
  getSecondsAsDigitalClock(inputSeconds: number) {
    var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);
    var hoursString = '';
    var minutesString = '';
    var secondsString = '';
    hoursString = (hours < 10) ? "0" + hours : hours.toString();
    minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
    secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
    return hoursString + ':' + minutesString + ':' + secondsString;
  }

  logOut() {
    this.auto.logOut();
    this.navCtrl.push(LogInPage);

  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 2000
    });
    loader.present();
  }
logOutAndLoading(){
    this.presentLoading();
    this.logOut();
  }


}
