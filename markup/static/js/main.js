'use strict';

// Data links
(function () {
  var dataPopup = {
    section1: {
      floor17: {
        room1: {
          link: '#',
          sell: true
        },
        room2: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/odnokomnatnye-kvartiry/dom-4/kvartira-66/',
          sell: false 
        },
        room3: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/odnokomnatnye-kvartiry/dom-4/kvartira-67/',
          sell: false 
        },
        room4: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/dvuhkomnatnye-kvartiry/dom-4/kvartira-68/',
          sell: false
        }
      },
      floor16: {
        room1: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/odnokomnatnye-kvartiry/dom-4/kvartira-63/',
          sell: false 
        },
        room2: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/dvuhkomnatnye-kvartiry/dom-4/kvartira-64/',
          sell: false 
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: '#',
          sell: true
        }
      },
      floor15: {
        room1: {
          link: '#',
          sell: true 
        },
        room2: {
          link: '#',
          sell: true 
        },
        room3: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/odnokomnatnye-kvartiry/dom-4/kvartira-59/',
          sell: false 
        },
        room4: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/dvuhkomnatnye-kvartiry/dom-4/kvartira-60/',
          sell: false
        }
      },
      floor14: {
        room1: {
          link: '#',
          sell: true
        },
        room2: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/odnokomnatnye-kvartiry/dom-4/kvartira-54/',
          sell: false 
        },
        room3: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/odnokomnatnye-kvartiry/dom-4/kvartira-55/',
          sell: false
        },
        room4: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/dvuhkomnatnye-kvartiry/dom-4/kvartira-56/',
          sell: false
        }
      },
      floor13: {
        room1: {
          link: '#',
          sell: true 
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: '#',
          sell: true 
        },
        room4: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/dvuhkomnatnye-kvartiry/dom-4/kvartira-52/',
          sell: false
        }
      },
      floor12: {
        room1: {
          link: '#',
          sell: true 
        },
        room2: {
          link: '#',
          sell: true 
        },
        room3: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/odnokomnatnye-kvartiry/dom-4/kvartira-47/',
          sell: false 
        },
        room4: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/dvuhkomnatnye-kvartiry/dom-4/kvartira-48/',
          sell: false
        }
      },
      floor11: {
        room1: {
          link: '#',
          sell: true 
        },
        room2: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/odnokomnatnye-kvartiry/dom-4/kvartira-42/',
          sell: false 
        },
        room3: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/odnokomnatnye-kvartiry/dom-4/kvartira-43/',
          sell: false 
        },
        room4: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/dvuhkomnatnye-kvartiry/dom-4/kvartira-44/',
          sell: false
        }
      },
      floor10: {
        room1: {
          link: '#',
          sell: true 
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/dvuhkomnatnye-kvartiry/dom-4/kvartira-40/',
          sell: false
        }
      },
      floor9: {
        room1: {
          link: '#',
          sell: true 
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/odnokomnatnye-kvartiry/dom-4/kvartira-35/',
          sell: false 
        },
        room4: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/dvuhkomnatnye-kvartiry/dom-4/kvartira-36/',
          sell: false
        }
      },
      floor8: {
        room1: {
          link: '#',
          sell: true 
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/dvuhkomnatnye-kvartiry/dom-4/kvartira-32/',
          sell: false
        }
      },
      floor7: {
        room1: {
          link: '#',
          sell: true 
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/odnokomnatnye-kvartiry/dom-4/kvartira-27/',
          sell: false 
        },
        room4: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/dvuhkomnatnye-kvartiry/dom-4/kvartira-28/',
          sell: false
        }
      },
      floor6: {
        room1: {
          link: '#',
          sell: true 
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: '#',
          sell: true  
        },
        room4: {
          link: '#',
          sell: true
        }
      },
      floor5: {
        room1: {
          link: '#',
          sell: true 
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/dvuhkomnatnye-kvartiry/dom-4/kvartira-20/',
          sell: false
        }
      },
      floor4: {
        room1: {
          link: '#',
          sell: true 
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/odnokomnatnye-kvartiry/dom-4/kvartira-15/',
          sell: false 
        },
        room4: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/dvuhkomnatnye-kvartiry/dom-4/kvartira-16/',
          sell: false
        }
      },
      floor3: {
        room1: {
          link: '#',
          sell: true 
        },
        room2: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/odnokomnatnye-kvartiry/dom-4/kvartira-10/',
          sell: false
        },
        room3: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/odnokomnatnye-kvartiry/dom-4/kvartira-11/',
          sell: false
        },
        room4: {
          link: '#',
          sell: true
        }
      },
      floor2: {
        room1: {
          link: '#',
          sell: true 
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: '#',
          sell: true
        }
      },
      floor1: {
        room1: {
          link: '#',
          sell: true 
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/dvuhkomnatnye-kvartiry/dom-4/kvartira-4/',
          sell: false
        }
      }
    },
    section2: {
      floor17: {
        room1: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/dvuhkomnatnye-kvartiry/dom-4/kvartira-133/',
          sell: false
        },
        room2: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/odnokomnatnye-kvartiry/dom-4/kvartira-134/',
          sell: false 
        },
        room3: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/odnokomnatnye-kvartiry/dom-4/kvartira-135/',
          sell: false
        },
        room4: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/dvuhkomnatnye-kvartiry/dom-4/kvartira-136/',
          sell: false
        }
      },
      floor16: {
        room1: {
          link: '#',
          sell: true
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/odnokomnatnye-kvartiry/dom-4/kvartira-131/',
          sell: false
        },
        room4: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/dvuhkomnatnye-kvartiry/dom-4/kvartira-132/',
          sell: false
        }
      },
      floor15: {
        room1: {
          link: '#',
          sell: true
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: '#',
          sell: true
        }
      },
      floor14: {
        room1: {
          link: '#',
          sell: true
        },
        room2: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/odnokomnatnye-kvartiry/dom-4/kvartira-122/',
          sell: false
        },
        room3: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/odnokomnatnye-kvartiry/dom-4/kvartira-123/',
          sell: false
        },
        room4: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/dvuhkomnatnye-kvartiry/dom-4/kvartira-124/',
          sell: false
        }
      },
      floor13: {
        room1: {
          link: '#',
          sell: true
        },
        room2: {
          link: '#',
          sell: true 
        },
        room3: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/odnokomnatnye-kvartiry/dom-4/kvartira-119/',
          sell: false
        },
        room4: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/dvuhkomnatnye-kvartiry/dom-4/kvartira-120/',
          sell: false
        }
      },
      floor12: {
        room1: {
          link: '#',
          sell: true
        },
        room2: {
          link: '#',
          sell: true 
        },
        room3: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/odnokomnatnye-kvartiry/dom-4/kvartira-115/',
          sell: false
        },
        room4: {
          link: '#',
          sell: true 
        }
      },
      floor11: {
        room1: {
          link: '#',
          sell: true
        },
        room2: {
          link: '#',
          sell: true 
        },
        room3: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/odnokomnatnye-kvartiry/dom-4/kvartira-111/',
          sell: false
        },
        room4: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/dvuhkomnatnye-kvartiry/dom-4/kvartira-112/',
          sell: false 
        }
      },
      floor10: {
        room1: {
          link: '#',
          sell: true
        },
        room2: {
          link: '#',
          sell: true 
        },
        room3: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/odnokomnatnye-kvartiry/dom-4/kvartira-107/',
          sell: false
        },
        room4: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/dvuhkomnatnye-kvartiry/dom-4/kvartira-108/',
          sell: false 
        }
      },
      floor9: {
        room1: {
          link: '#',
          sell: true
        },
        room2: {
          link: '#',
          sell: true 
        },
        room3: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/odnokomnatnye-kvartiry/dom-4/kvartira-103/',
          sell: false
        },
        room4: {
          link: '#',
          sell: true
        }
      },
      floor8: {
        room1: {
          link: '#',
          sell: true
        },
        room2: {
          link: '#',
          sell: true 
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/dvuhkomnatnye-kvartiry/dom-4/kvartira-100/',
          sell: false
        }
      },
      floor7: {
        room1: {
          link: '#',
          sell: true
        },
        room2: {
          link: '#',
          sell: true 
        },
        room3: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/odnokomnatnye-kvartiry/dom-4/kvartira-95/',
          sell: false
        },
        room4: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/dvuhkomnatnye-kvartiry/dom-4/kvartira-96/',
          sell: false
        }
      },
      floor6: {
        room1: {
          link: '#',
          sell: true
        },
        room2: {
          link: '#',
          sell: true 
        },
        room3: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/odnokomnatnye-kvartiry/dom-4/kvartira-91/',
          sell: false
        },
        room4: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/dvuhkomnatnye-kvartiry/dom-4/kvartira-92/',
          sell: false
        }
      },
      floor5: {
        room1: {
          link: '#',
          sell: true
        },
        room2: {
          link: '#',
          sell: true 
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/dvuhkomnatnye-kvartiry/dom-4/kvartira-88/',
          sell: false
        }
      },
      floor4: {
        room1: {
          link: '#',
          sell: true
        },
        room2: {
          link: '#',
          sell: true 
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: '#',
          sell: true
        }
      },
      floor3: {
        room1: {
          link: '#',
          sell: true
        },
        room2: {
          link: '#',
          sell: true 
        },
        room3: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/odnokomnatnye-kvartiry/dom-4/kvartira-79/',
          sell: false
        },
        room4: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/dvuhkomnatnye-kvartiry/dom-4/kvartira-80/',
          sell: false
        }
      },
      floor2: {
        room1: {
          link: '#',
          sell: true
        },
        room2: {
          link: '#',
          sell: true 
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: '#',
          sell: true
        }
      },
      floor1: {
        room1: {
          link: '#',
          sell: true
        },
        room2: {
          link: '#',
          sell: true 
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/dvuhkomnatnye-kvartiry/dom-4/kvartira-72/',
          sell: false
        }
      }
    },
    section3: {
      floor17: {
        room1: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/dvuhkomnatnye-kvartiry/dom-4/kvartira-201/',
          sell: false
        },
        room2: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/odnokomnatnye-kvartiry/dom-4/kvartira-202/',
          sell: false 
        },
        room3: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/odnokomnatnye-kvartiry/dom-4/kvartira-203/',
          sell: false 
        },
        room4: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/dvuhkomnatnye-kvartiry/dom-4/kvartira-204/',
          sell: false
        }
      },
      floor16: {
        room1: {
          link: '#',
          sell: true 
        },
        room2: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/odnokomnatnye-kvartiry/dom-4/kvartira-198/',
          sell: false 
        },
        room3: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/odnokomnatnye-kvartiry/dom-4/kvartira-199/',
          sell: false
        },
        room4: {
          link: '#',
          sell: true 
        }
      },
      floor15: {
        room1: {
          link: '#',
          sell: true
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/dvuhkomnatnye-kvartiry/dom-4/kvartira-196/',
          sell: false
        }
      },
      floor14: {
        room1: {
          link: '#',
          sell: true
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/odnokomnatnye-kvartiry/dom-4/kvartira-191/',
          sell: false
        },
        room4: {
          link: '#',
          sell: true
        }
      },
      floor13: {
        room1: {
          link: '#',
          sell: true
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/odnokomnatnye-kvartiry/dom-4/kvartira-187/',
          sell: false
        },
        room4: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/dvuhkomnatnye-kvartiry/dom-4/kvartira-188/',
          sell: false
        }
      },
      floor12: {
        room1: {
          link: '#',
          sell: true
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/odnokomnatnye-kvartiry/dom-4/kvartira-183/',
          sell: false
        },
        room4: {
          link: '#',
          sell: true
        }
      },
      floor11: {
        room1: {
          link: '#',
          sell: true
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/odnokomnatnye-kvartiry/dom-4/kvartira-179/',
          sell: false 
        },
        room4: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/dvuhkomnatnye-kvartiry/dom-4/kvartira-180/',
          sell: false
        }
      },
      floor10: {
        room1: {
          link: '#',
          sell: true
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/dvuhkomnatnye-kvartiry/dom-4/kvartira-176/',
          sell: false
        }
      },
      floor9: {
        room1: {
          link: '#',
          sell: true 
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/odnokomnatnye-kvartiry/dom-4/kvartira-171/',
          sell: false
        },
        room4: {
          link: '#',
          sell: true
        }
      },
      floor8: {
        room1: {
          link: '#',
          sell: true 
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/dvuhkomnatnye-kvartiry/dom-4/kvartira-168/',
          sell: false
        }
      },
      floor7: {
        room1: {
          link: '#',
          sell: true 
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/odnokomnatnye-kvartiry/dom-4/kvartira-163/',
          sell: false
        },
        room4: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/dvuhkomnatnye-kvartiry/dom-4/kvartira-164/',
          sell: false
        }
      },
      floor6: {
        room1: {
          link: '#',
          sell: true 
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/odnokomnatnye-kvartiry/dom-4/kvartira-159/',
          sell: false
        },
        room4: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/dvuhkomnatnye-kvartiry/dom-4/kvartira-160/',
          sell: false
        }
      },
      floor5: {
        room1: {
          link: '#',
          sell: true
        },
        room2: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/odnokomnatnye-kvartiry/dom-4/kvartira-154/',
          sell: false
        },
        room3: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/odnokomnatnye-kvartiry/dom-4/kvartira-155/',
          sell: false
        },
        room4: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/dvuhkomnatnye-kvartiry/dom-4/kvartira-156/',
          sell: false
        }
      },
      floor4: {
        room1: {
          link: '#',
          sell: true
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/odnokomnatnye-kvartiry/dom-4/kvartira-151/',
          sell: false  
        },
        room4: {
          link: '#',
          sell: true 
        }
      },
      floor3: {
        room1: {
          link: '#',
          sell: true
        },
        room2: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/odnokomnatnye-kvartiry/dom-4/kvartira-146/',
          sell: false
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: '#',
          sell: true 
        }
      },
      floor2: {
        room1: {
          link: '#',
          sell: true 
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: '#',
          sell: true
        }
      },
      floor1: {
        room1: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/dvuhkomnatnye-kvartiry/dom-4/kvartira-137/',
          sell: false 
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: '#',
          sell: true
        }
      }
    },
    section4: {
      floor17: {
        room1: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/dvuhkomnatnye-kvartiry/dom-4/kvartira-268/',
          sell: false
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/odnokomnatnye-kvartiry/dom-4/kvartira-270/',
          sell: false 
        },
        room4: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/dvuhkomnatnye-kvartiry/dom-4/kvartira-271/',
          sell: false
        }
      },
      floor16: {
        room1: {
          link: '#',
          sell: true 
        },
        room2: {
          link: '#',
          sell: true 
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: '#',
          sell: true 
        }
      },
      floor15: {
        room1: {
          link: '#',
          sell: true 
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: '#',
          sell: true
        }
      },
      floor14: {
        room1: {
          link: '#',
          sell: true
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: '#',
          sell: true
        }
      },
      floor13: {
        room1: {
          link: '#',
          sell: true
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: '#',
          sell: true
        }
      },
      floor12: {
        room1: {
          link: '#',
          sell: true
        },
        room2: {
          link: '#',
          sell: true 
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: '#',
          sell: true
        }
      },
      floor11: {
        room1: {
          link: '#',
          sell: true 
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: '#',
          sell: true
        }
      },
      floor10: {
        room1: {
          link: '#',
          sell: true 
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: '#',
          sell: true
        }
      },
      floor9: {
        room1: {
          link: '#',
          sell: true 
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: '#',
          sell: true
        }
      },
      floor8: {
        room1: {
          link: '#',
          sell: true 
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: '#',
          sell: true
        }
      },
      floor7: {
        room1: {
          link: '#',
          sell: true 
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: '#',
          sell: true
        }
      },
      floor6: {
        room1: {
          link: '#',
          sell: true 
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: '#',
          sell: true
        }
      },
      floor5: {
        room1: {
          link: '#',
          sell: true 
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: '#',
          sell: true
        }
      },
      floor4: {
        room1: {
          link: '#',
          sell: true 
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: '#',
          sell: true
        }
      },
      floor3: {
        room1: {
          link: '#',
          sell: true 
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: '#',
          sell: true
        }
      },
      floor2: {
        room1: {
          link: '#',
          sell: true 
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: '#',
          sell: true
        }
      },
      floor1: {
        room1: {
          link: '#',
          sell: true 
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: '#',
          sell: true
        }
      }
    },
    section5: {
      floor17: {
        room1: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/dvuhkomnatnye-kvartiry/dom-4/kvartira-335/',
          sell: false
        },
        room2: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/odnokomnatnye-kvartiry/dom-4/kvartira-336/',
          sell: false
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: '#',
          sell: true
        }
      },
      floor16: {
        room1: {
          link: '#',
          sell: true
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: '#',
          sell: true
        }
      },
      floor15: {
        room1: {
          link: '#',
          sell: true
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: '#',
          sell: true
        }
      },
      floor14: {
        room1: {
          link: '#',
          sell: true
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: '#',
          sell: true
        }
      },
      floor13: {
        room1: {
          link: '#',
          sell: true
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: '#',
          sell: true
        }
      },
      floor12: {
        room1: {
          link: '#',
          sell: true
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: '#',
          sell: true
        }
      },
      floor11: {
        room1: {
          link: '#',
          sell: true
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: '#',
          sell: true
        }
      },
      floor10: {
        room1: {
          link: '#',
          sell: true
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: '#',
          sell: true
        }
      },
      floor9: {
        room1: {
          link: '#',
          sell: true
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: '#',
          sell: true
        }
      },
      floor8: {
        room1: {
          link: '#',
          sell: true
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: '#',
          sell: true
        }
      },
      floor7: {
        room1: {
          link: '#',
          sell: true
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: '#',
          sell: true
        }
      },
      floor6: {
        room1: {
          link: '#',
          sell: true
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: '#',
          sell: true
        }
      },
      floor5: {
        room1: {
          link: '#',
          sell: true
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: '#',
          sell: true
        }
      },
      floor4: {
        room1: {
          link: '#',
          sell: true
        },
        room2: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/odnokomnatnye-kvartiry/dom-4/kvartira-284/',
          sell: false
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: '#',
          sell: true
        }
      },
      floor3: {
        room1: {
          link: '#',
          sell: true
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: '#',
          sell: true
        }
      },
      floor2: {
        room1: {
          link: '#',
          sell: true
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: '#',
          sell: true
        }
      },
      floor1: {
        room1: {
          link: 'https://www.2330246.ru/kupit-kvartiru-v-koroleve/dvuhkomnatnye-kvartiry/dom-4/kvartira-272/',
          sell: false
        },
        room2: {
          link: '#',
          sell: true
        },
        room3: {
          link: '#',
          sell: true
        },
        room4: {
          link: '#',
          sell: true
        }
      }
    }
  };
  
  window.dataPopup = dataPopup;
})();

// House
(function () {
  
  var house = document.querySelector('.house');
  var preview = house.querySelector('.house__preview');
  var previewSell = preview.querySelector('.house__preview-sell');
  var previewSection = preview.querySelector('.house__preview-section');
  var previewFloor = preview.querySelector('.house__preview-floor');
  var floor = house.querySelectorAll('.house__appartment-link');
  var timerId;
  var coords = {
    x: 0,
    y: 0
  };
  var popup = document.querySelector('.house__popup');
  var exit = popup.querySelector('.house__popup-exit');
  var popupFloor = popup.querySelector('.house__popup-headline-floor');
  var popupSection = popup.querySelector('.house__popup-headline-section');
  var popupImg = popup.querySelector('.house__popup-img');
  var popupRooms = {
    room1: popup.querySelector('.house__popup-img-room1-link'),
    room2: popup.querySelector('.house__popup-img-room2-link'),
    room3: popup.querySelector('.house__popup-img-room3-link'),
    room4: popup.querySelector('.house__popup-img-room4-link'),
    setSell: function (obj) {
      var classString = obj.classList[0] + '--sell';
      
      return classString;
    }
  };
  var popupRooms6 = document.querySelector('.house__popup--rooms6');
  var exitPopupRooms6 = popupRooms6.querySelector('.house__popup-exit');
  var popupFloorPopupRooms6 = popupRooms6.querySelector('.house__popup-headline-floor');
  var popupSectionPopupRooms6 = popupRooms6.querySelector('.house__popup-headline-section');
  var objPopupRooms6 = {
    room1: popupRooms6.querySelector('.house__popup-img-room1-6-link'),
    room2: popupRooms6.querySelector('.house__popup-img-room2-6-link'),
    room3: popupRooms6.querySelector('.house__popup-img-room3-6-link'),
    room4: popupRooms6.querySelector('.house__popup-img-room4-6-link'),
    room5: popupRooms6.querySelector('.house__popup-img-room5-6-link'),
    room6: popupRooms6.querySelector('.house__popup-img-room6-6-link'),
    setSell: function (obj) {
      var classString = obj.classList[0] + '--sell';
      
      return classString;
    }
  };
  
  if (document.body.clientWidth > 1024) {
    house.addEventListener('mousemove', function (evt) {
      coords.x = evt.clientX;
      coords.y = evt.clientY;

      if (coords.y < 130 || coords.y > 600) {
        var pos = preview.style.top;

        preview.style.top = pos;
      } else {
        preview.style.top = (coords.y - 150) + 'px';
      };
      preview.style.left = (coords.x - 200) + 'px';
    });
  };
  
  for (var i = 0, len = floor.length; i < len; i++) {
    if (document.body.clientWidth > 1366) {
      floor[i].addEventListener('mouseenter', function() {
        var dataFloor = {
          dataSell: this.dataset.selling,
          dataSection: this.dataset.section,
          dataFloor: this.dataset.floor
        };

        clearTimeout(timerId);

        preview.classList.remove('house__preview--hidden');

        if (parseInt(dataFloor.dataSell, 10) === 0) {
          preview.classList.add('house__preview--red');
        } else {
          preview.classList.remove('house__preview--red');
        }

        previewSell.textContent = dataFloor.dataSell;
        previewSection.textContent = dataFloor.dataSection;
        previewFloor.textContent = dataFloor.dataFloor;
      });
      
      floor[i].addEventListener('mouseleave', function () {
        timerId = setTimeout(function () {
          preview.classList.add('house__preview--hidden');
        }, 50);
      });
    }
    
    floor[i].addEventListener('click', function (evt) {
      evt.preventDefault();
      
      var dataFloor = this.dataset.floor;
      var dataSection = this.dataset.section;
      var dataRooms = this.dataset.rooms;
      
      if (dataRooms === '6') {
        popupRooms6.classList.remove('hidden');
        popupFloorPopupRooms6.textContent = dataFloor;
        popupSectionPopupRooms6.textContent = dataSection;
      } else {
        popup.classList.remove('hidden');
      }
      
      for (var i = 1; i <= 17; i++) {
        if (dataFloor === (i + '')  && dataSection === '1') {
          popupRooms.room1.href = dataPopup.section1['floor' + i].room1.link;
          popupRooms.room2.href = dataPopup.section1['floor' + i].room2.link;
          popupRooms.room3.href = dataPopup.section1['floor' + i].room3.link;
          popupRooms.room4.href = dataPopup.section1['floor' + i].room4.link;
          for (var j = 1; j <= 4; j++) {
            if (dataPopup.section1['floor' + i]['room' + j].sell === true) {
              popupRooms['room' + j].classList.add(popupRooms.setSell(popupRooms['room' + j]));
            }
          }
        } else if (dataFloor === (i + '')  && dataSection === '2') {
          popupRooms.room1.href = dataPopup.section2['floor' + i].room1.link;
          popupRooms.room2.href = dataPopup.section2['floor' + i].room2.link;
          popupRooms.room3.href = dataPopup.section2['floor' + i].room3.link;
          popupRooms.room4.href = dataPopup.section2['floor' + i].room4.link;
          for (var j = 1; j <= 4; j++) {
            if (dataPopup.section2['floor' + i]['room' + j].sell === true) {
              popupRooms['room' + j].classList.add(popupRooms.setSell(popupRooms['room' + j]));
            }
          }
        } else if (dataFloor === (i + '')  && dataSection === '3') {
          popupRooms.room1.href = dataPopup.section3['floor' + i].room1.link;
          popupRooms.room2.href = dataPopup.section3['floor' + i].room2.link;
          popupRooms.room3.href = dataPopup.section3['floor' + i].room3.link;
          popupRooms.room4.href = dataPopup.section3['floor' + i].room4.link;
          for (var j = 1; j <= 4; j++) {
            if (dataPopup.section3['floor' + i]['room' + j].sell === true) {
              popupRooms['room' + j].classList.add(popupRooms.setSell(popupRooms['room' + j]));
            }
          }
        } else if (dataFloor === (i + '')  && dataSection === '4') {
          popupRooms.room1.href = dataPopup.section4['floor' + i].room1.link;
          popupRooms.room2.href = dataPopup.section4['floor' + i].room2.link;
          popupRooms.room3.href = dataPopup.section4['floor' + i].room3.link;
          popupRooms.room4.href = dataPopup.section4['floor' + i].room4.link;
          for (var j = 1; j <= 4; j++) {
            if (dataPopup.section4['floor' + i]['room' + j].sell === true) {
              popupRooms['room' + j].classList.add(popupRooms.setSell(popupRooms['room' + j]));
            }
          }
        } else if (dataFloor === (i + '')  && dataSection === '5') {
          popupRooms.room1.href = dataPopup.section5['floor' + i].room1.link;
          popupRooms.room2.href = dataPopup.section5['floor' + i].room2.link;
          popupRooms.room3.href = dataPopup.section5['floor' + i].room3.link;
          popupRooms.room4.href = dataPopup.section5['floor' + i].room4.link;
          for (var j = 1; j <= 4; j++) {
            if (dataPopup.section5['floor' + i]['room' + j].sell === true) {
              popupRooms['room' + j].classList.add(popupRooms.setSell(popupRooms['room' + j]));
            }
          }
        }
      }
      
      popupFloor.textContent = dataFloor;
      popupSection.textContent = dataSection;
    });
  };
  
  exit.addEventListener('click', function () {
    popup.classList.add('hidden');
    popupRooms.room1.classList.remove(popupRooms.setSell(popupRooms.room1));
    popupRooms.room2.classList.remove(popupRooms.setSell(popupRooms.room2));
    popupRooms.room3.classList.remove(popupRooms.setSell(popupRooms.room3));
    popupRooms.room4.classList.remove(popupRooms.setSell(popupRooms.room4));
  });
  
  exitPopupRooms6.addEventListener('click', function () {
    popupRooms6.classList.add('hidden');
    objPopupRooms6.room1.classList.remove(popupRooms.setSell(objPopupRooms6.room1));
    objPopupRooms6.room2.classList.remove(popupRooms.setSell(objPopupRooms6.room2));
    objPopupRooms6.room3.classList.remove(popupRooms.setSell(objPopupRooms6.room3));
    objPopupRooms6.room4.classList.remove(popupRooms.setSell(objPopupRooms6.room4));
    objPopupRooms6.room5.classList.remove(popupRooms.setSell(objPopupRooms6.room5));
    objPopupRooms6.room6.classList.remove(popupRooms.setSell(objPopupRooms6.room6));
  });
})();

// Aside button
(function () {
  var aside = document.querySelector('.aside');
  var button = aside.querySelector('.aside__burder');
  
  if (document.body.clientWidth < 1570) {
    aside.classList.add('aside--close');
    button.addEventListener('click', function () {
      aside.classList.toggle('aside--close');
    });
  }
})()
