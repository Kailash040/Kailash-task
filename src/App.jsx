import "./App.css";

const menuData = [

  {
    label: "College Management ",
    submenu: [
    {
      label: "Open()",
      submenu: [
      
       
     
        {
          label: "ClassRoom",
          submenu: [
          
            { label: "IsOccupied" ,
            submenu: [
            
              
              { label: "isPresent() ",
              submenu: [
                {
                  label: "Bus",
                  submenu: [
                    {
                      label: "Bus Id",
                      submenu: [
                        {
                          label: "121212",
                        }
                      
                      ],
                    },
                    {
                      label: "Bus Name",
                      submenu: [
                        {
                          label: "Bus travel",
                        }
                      
                      ],
                    },
                    {
                      label: "Driver Name", submenu: [
                        {
                          label: "XYZ",
                        },
                      
                      ],
                    },
                    {
                      label: "Total Sheets",
                      submenu: [
                        {
                          label: "123",
                        },
                        
                      ],
                    },
                  ],
                },
                {
                  label: "Staffs",
                  submenu: [
                    {
                      label: "Staffs Id",
                      submenu: [
                        {
                          label: "007",
                        }
                      
                      ],
                    },
                    {
                      label: "Staffs Name",
                      submenu: [
                        {
                          label: "Kailash Tanwar",
                        }
                      
                      ],
                    },
                    {
                      label: "Salary",
                    },
                  ],
                },
                {
                  label: "Library",
                  submenu: [
                    {
                      label: "Library Name",  submenu: [
                        {
                          label: "xyz name",
                        },
                        
                       
                      ],
                    },
                    
                   
                  ],
                },
                {
                  label: "LibraryID",
                  submenu: [
                    {
                      label: "12122345676543"
                    },
                    
                   
                  ],
                },
              ],
              
             },{ label: "StudentDetails ",
             submenu: [
              {
                label: "UG Students",
                submenu: [
                  {
                    label: "Course",
                    submenu: [
                      {
                        label: "BCA",
                        submenu: [
                          {
                            label: "Percentage",
                            submenu: [
                              {
                                label: "98%",
                              }
                            
                            ],
                          }
                        
                        ],
                      }
                    
                    ],
                  }
                
                ],
              },
              {
                label: "PG Students",
                submenu: [
                  {
                    label: "Course",
                    submenu: [
                      {
                        label: "MCA",
                        submenu: [
                          {
                            label: "Percentage",
                            submenu: [
                              {
                                label: "99%",
                              }
                            
                            ],
                          }
                        
                        ],
                      }
                    
                    ],
                  }
                
                ],
              },
             
            ],
  
            },
              { label: "Gender" ,
              submenu: [
                {
                  label: "Male",
                },
                
                { label: "Female "
               },
              
              ],
            },
            ],
          },
          ],
        },
      ],
  
    },
    {
      label: " facility",
      submenu: [ 
        {
          label: "Hostal Details",
          submenu: [
            {
              label: "Boys Hostal",
            },
            { label: "Girls Hostal" },

          ],
        },
      ],

    }
  ,
  {
    label: "College Name",
    submenu: [
      {
        label: "MDU",
      },
      {
        label: "Department",
        submenu: [
          {
            label: "Department Name",
          },
          { label: "Total Staffs" }
        ],
      },
    ],
  },
  // /////////
 
  /////////////////////////////
  ],

  },


];

function App() {
  const toggleSubMenu = (e) => {
    e.stopPropagation();

    let submenu = e.target.querySelector("ul");

    if (!submenu) return;

    if (submenu.style.display === "none" || !submenu.style.display) {
      submenu.style.display = "block";
    } else {
      submenu.style.display = "none";
    }
  };

  const renderSubMenu = (subMenu) => {
    return (
      <ul className="submenu">
        {subMenu.map((subItem, index) => (
          <li key={index} onClick={toggleSubMenu}>
            {subItem.label}
            {subItem.submenu && renderSubMenu(subItem.submenu)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h1>My Task</h1>
      <ul>
        {menuData.map((item, index) => (
          <li key={index} onClick={toggleSubMenu}>
            {item.label}
            {item.submenu && renderSubMenu(item.submenu)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
