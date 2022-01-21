

const airProperties = [
  { tf: 10, k: 0.02512, v: 0.00001416, pr: 0.705 },
  { tf: 20, k: 0.02593, v: 0.00001506, pr: 0.703 },
  { tf: 30, k: 0.02675, v: 0.000016, pr: 0.701 },
  { tf: 40, k: 0.02756, v: 0.00001696, pr: 0.699 },
  { tf: 50, k: 0.02826, v: 0.00001765, pr: 0.698 },
  { tf: 60, k: 0.02926, v: 0.00001897, pr: 0.696 },
  { tf: 70, k: 0.02966, v: 0.00002, pr: 0.694 },
  { tf: 80, k: 0.03047, v: 0.00002109, pr: 0.692 },
  { tf: 90, k: 0.03128, v: 0.0000221, pr: 0.69 },
]

const FlooringMaterials = [
  { material: "concrete", k: 1.4, p: 2300, c: 880 },
  { material: "wood", k: 0.17, p: 545, c: 2385 },
  { material: "tiles", k: 1.1, p: 1200, c: 850 },
  { material: "pavers", k: 1.6, p: 2243, c: 900 },
]

const materials = ["concrete", "wood", "tiles", "pavers"]
//Global Values
const Tin = -10;
const Tsi = 90;
const Tso = 30;
const g = 9.81;
const l = 1;



const Algorithm = async (data) => {
  //k1, k2 values
  let k1Value = FlooringMaterials.find(o => o.material === data.layer1)
  let k1 = k1Value.k;
  let k2Value = FlooringMaterials.find(o => o.material === data.layer2)
  let k2 = k2Value.k;
  let p = k2Value.p;
  let c = k2Value.c;


  //calculatuing hi

  let Tf1 = (Tsi + Tin) / 20;

  if (Tf1 < 0.5) {
    Tf1 = 0.7
  }
  let Tf11 = Math.round(Tf1);
  let TableValues1 = airProperties.find(o => o.tf === (Tf11 * 10));
  console.log(TableValues1)
  let ki = TableValues1.k;
  let vi = TableValues1.v;
  let Pri = TableValues1.pr;

  let dt1 = Tsi - Tin;
  let B1 = 1 / (Tf1 + 273);
  let Gri = Math.pow(l, 3) * g * B1 * (dt1) / Math.pow(vi, 2);



  let Nui = 0.27 * Math.pow(Gri * Pri, 0.25);

  let hi = Nui * ki / l;

  //calculatuing ho
  let Tf2 = (Tso + Tin) / 20;

  if (Tf2 < 0.5) {
    Tf2 = 0.7
  }
  let Tf22 = Math.round(Tf2);
  let TableValues2 = airProperties.find(o => o.tf === (Tf22 * 10));
  let ko = TableValues2.k;
  let vo = TableValues2.v;
  let Pro = TableValues2.pr;

  let dt2 = Tso - Tin;
  let B2 = 1 / (Tf2 + 273);
  let Gro = Math.pow(l, 3) * g * B2 * (dt1) / Math.pow(vo, 2);

  let Nuo = 0.27 * Math.pow(Gro * Pro, 0.25);

  let ho = Nuo * ko / l;

  let ab = (1 / hi) + (Number((data.layer1Thickness / 1000)) / k1) + (Number((data.layer2Thickness / 1000)) / k2) + (1 / ho);

  // Calculating U
  const result = 1 / ab;



  let A = 1;
  let dT = (data.desirableTemp - data.environTemp);
  const U = result;
  const Q = U * A * dT;


  //Calculating Time
  const T1 = (1 / ho) * p * c * ((data.layer1Thickness / 1000) + (data.layer2Thickness / 1000)) / 2;
  const T2 = Math.log((Number(data.desirableTemp) - Number(data.environTemp)) / 5)
  const T = T1 * T2;

  const values = { Q, T, Gri, Pri, Nui, hi, Gro, Pro, Nuo, ho, }

  return values;
}


export default Algorithm;