import React from 'react';
import DashboardLayout from 'react-dashboard-layout';
import { Grid } from '@syncfusion/ej2-react-grids'; // Import the Grid component


const App = () => {let dashboard = new DashboardLayout({
  cellSpacing: [10, 10],
  allowResizing: true,
  columns: 4,
  cellAspectRatio: 2
});

const gridObj = new Grid({
  dataSource: response,
  allowSorting: true,
  enableHover: false,
  allowKeyboard: true,
  allowPaging: true,
  width: '100%',
  pageSettings: {
      pageCount: 4,
      pageSize: 14
  },
  columns: [
      {
          field: 'Date',
          headerText: 'Date',
          width: 120,
          format: 'yMd',
          hideAtMedia: '(min-width: 600px)',
      },
      {
          field: 'Active',
          headerText: 'Active',
          width: 170,
      },
      {
          field: 'Recovered',
          headerText: 'Recovered',
          width: 160,
          hideAtMedia: '(min-width: 600px)',
      },
      {
          field: 'Deaths',
          headerText: 'Deaths',
          hideAtMedia: '(min-width: 1050px)',
      },
      {
          field: 'Confirmed',
          headerText: 'Confirmed',
          width: 120,
          textAlign: 'Right',
      },
  ],
});

gridObj.appendTo('#recentexpense-grid');
} // Replace 'recentexpense-grid' with your target element ID




// const Dashboard = () => {
//   // Sample data for listings
//   const listings = [
//     { id: 1, title: 'Listing 1', description: 'This is listing 1' },
//     { id: 2, title: 'Listing 2', description: 'This is listing 2' },
//     { id: 3, title: 'Listing 3', description: 'This is listing 3' },
//   ];

//   // Define the layout configuration
//   const layoutConfig = {
//     cellSpacing: [10, 10],
//     allowResizing: true,
//     columns: 4,
//     cellAspectRatio: 2
//   };

//   // Render the listings inside the layout
//   const renderListings = () => {
//     const layout = new DashboardLayout(layoutConfig);

//     return listings.map((listing) => (
//       <div key={listing.id} className="listing-card" style={layout.getItemStyle()}>
//         <h2>{listing.title}</h2>
//         <p>{listing.description}</p>
//       </div>
//     ));
//   };

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <div className="listings-container">
//         {renderListings()}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
export default App;
