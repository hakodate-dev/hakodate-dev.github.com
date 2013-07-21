/*
 * Icons for COFOG taxonomy
 *
 */
var Taxes = Taxes || {};

Taxes.baseKoujo = 330000; // 住民税基礎控除
Taxes.huyoKoujo = 330000; // 扶養控除
Taxes.taxRate = 0.06; // 住民税率

var OpenSpending = OpenSpending || {};

OpenSpending.identifier = 'hakodate_budget'; 
OpenSpending.year = '2011';

OpenSpending.Styles = OpenSpending.Styles || {};

OpenSpending.Styles.Cofog = {
/* Hakodate cofog */
  '1-1': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#935B3B' },
  '1': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#935B3B' },
  '2': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#935B3B' },
  '3': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#935B3B' },
  '4': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#935B3B' },
  '5': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#935B3B' },
  '6': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#935B3B' },
  '7': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#935B3B' },
  '8': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#935B3B' },
  '9': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#935B3B' },
  '10': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#935B3B' },
  '11': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#935B3B' },
  '12': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#935B3B' },
  
  '2-2': { icon: 'icons/family.svg', color: '#C75746', bcolor: '#0AB971' },
  '13': { icon: 'icons/family.svg', color: '#C75746', bcolor: '#0AB971' },
  '14': { icon: 'icons/family.svg', color: '#C75746', bcolor: '#0AB971' },
  '15': { icon: 'icons/family.svg', color: '#C75746', bcolor: '#0AB971' },
  '16': { icon: 'icons/family.svg', color: '#C75746', bcolor: '#0AB971' },
  '17': { icon: 'icons/family.svg', color: '#C75746', bcolor: '#0AB971' },
  '18': { icon: 'icons/family.svg', color: '#C75746', bcolor: '#0AB971' },
  '19': { icon: 'icons/family.svg', color: '#C75746', bcolor: '#0AB971' },
  '20': { icon: 'icons/family.svg', color: '#C75746', bcolor: '#0AB971' },
  '21': { icon: 'icons/family.svg', color: '#C75746', bcolor: '#0AB971' },
  '22': { icon: 'icons/family.svg', color: '#C75746', bcolor: '#0AB971' },
  '23': { icon: 'icons/family.svg', color: '#C75746', bcolor: '#0AB971' },
  
  '3-3': { icon: 'icons/machi.svg', color: '#C75746', bcolor: '#4E6D00' },
  '24': { icon: 'icons/machi.svg', color: '#C75746', bcolor: '#4E6D00' },
  '25': { icon: 'icons/machi.svg', color: '#C75746', bcolor: '#4E6D00' },
  '26': { icon: 'icons/machi.svg', color: '#C75746', bcolor: '#4E6D00' },
  '27': { icon: 'icons/machi.svg', color: '#C75746', bcolor: '#4E6D00' },
  '28': { icon: 'icons/machi.svg', color: '#C75746', bcolor: '#4E6D00' },
  '29': { icon: 'icons/machi.svg', color: '#C75746', bcolor: '#4E6D00' },
  '30': { icon: 'icons/machi.svg', color: '#C75746', bcolor: '#4E6D00' },
  '31': { icon: 'icons/machi.svg', color: '#C75746', bcolor: '#4E6D00' },
  
  '4-4': { icon: 'icons/tree.svg', color: '#C75746', bcolor: '#D33673' },
  '32': { icon: 'icons/tree.svg', color: '#C75746', bcolor: '#D33673' },
  '33': { icon: 'icons/tree.svg', color: '#C75746', bcolor: '#D33673' },
  
  '5-5': { icon: 'icons/payroll.svg', color: '#C75746', bcolor: '#2A3A03' },
  '34': { icon: 'icons/payroll.svg', color: '#C75746', bcolor: '#2A3A03' },
  '35': { icon: 'icons/payroll.svg', color: '#C75746', bcolor: '#2A3A03' },
  
  '6-6': { icon: 'icons/economy-tourism.svg', color: '#C75746', bcolor: '#EC2406' },
  '36': { icon: 'icons/economy-tourism.svg', color: '#C75746', bcolor: '#EC2406' },
  '37': { icon: 'icons/economy-tourism.svg', color: '#C75746', bcolor: '#EC2406' },
  '38': { icon: 'icons/economy-tourism.svg', color: '#C75746', bcolor: '#EC2406' },
  '39': { icon: 'icons/economy-tourism.svg', color: '#C75746', bcolor: '#EC2406' },
  '40': { icon: 'icons/economy-tourism.svg', color: '#C75746', bcolor: '#EC2406' },

  '7-7': { icon: 'icons/fire-brigade.svg', color: '#C75746', bcolor: '#938626' },
  '41': { icon: 'icons/fire-brigade.svg', color: '#C75746', bcolor: '#938626' },

  '8-8': { icon: 'icons/c_waterdoun-watersup.svg', color: '#C75746', bcolor: '#C75746' },
  '42': { icon: 'icons/c_waterdoun-watersup.svg', color: '#C75746', bcolor: '#C75746' },

  '9-9': { icon: 'icons/government.svg', color: '#C75746', bcolor: '#D33673' },
  '43': { icon: 'icons/government.svg', color: '#C75746', bcolor: '#D33673' },
  '44': { icon: 'icons/government.svg', color: '#C75746', bcolor: '#D33673' },
  '45': { icon: 'icons/government.svg', color: '#C75746', bcolor: '#D33673' },
  '46': { icon: 'icons/government.svg', color: '#C75746', bcolor: '#D33673' },
  '47': { icon: 'icons/government.svg', color: '#C75746', bcolor: '#D33673' },
  '48': { icon: 'icons/government.svg', color: '#C75746', bcolor: '#D33673' },
  '49': { icon: 'icons/government.svg', color: '#C75746', bcolor: '#D33673' },
  '50': { icon: 'icons/government.svg', color: '#C75746', bcolor: '#D33673' },
  '51': { icon: 'icons/government.svg', color: '#C75746', bcolor: '#D33673' },
  '52': { icon: 'icons/government.svg', color: '#C75746', bcolor: '#D33673' },
  '53': { icon: 'icons/government.svg', color: '#C75746', bcolor: '#D33673' },

  '10-10': { icon: 'icons/dollar.svg', color: '#C75746', bcolor: '#790586' },
  '54': { icon: 'icons/dollar.svg', color: '#C75746', bcolor: '#790586' },
};


