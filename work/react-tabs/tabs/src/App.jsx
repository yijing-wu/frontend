import { useState } from 'react';
import Tabs from './Tabs';
import './app.css';

const tabContents = {
  'Introduction': `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae tristique velit. Donec a risus eget diam sodales hendrerit. Nunc tincidunt ligula magna, ut tempus nulla commodo quis. Nulla venenatis efficitur nunc, sed dignissim nisi vestibulum sed. Vestibulum interdum lectus a felis lobortis sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In dapibus, orci vel porttitor suscipit, ex ligula ultricies quam, ac iaculis augue dui quis orci. Cras dapibus dictum ex, vitae maximus ipsum sodales vel. Vestibulum consectetur justo lobortis purus sagittis consequat. Suspendisse in tellus quis sapien hendrerit dictum eu in felis. Sed in diam velit. Vestibulum vehicula porta placerat. Aliquam erat volutpat. Nam mauris metus, rhoncus sed enim quis, aliquet consectetur ligula.
  `,
  'Home': `
  Vestibulum sodales neque eget dui molestie egestas. In ut eros a lectus malesuada hendrerit ac at sapien. Vestibulum sit amet condimentum urna. Quisque auctor quam at nunc tincidunt, ac euismod mi tempus. Curabitur fermentum, velit eget egestas ornare, nisi tortor hendrerit libero, id consequat augue turpis sed arcu. Nam consectetur magna ligula. Curabitur ac lectus mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam nec risus ac sapien imperdiet maximus. Praesent ipsum velit, tristique ut urna nec, tristique pretium odio. Proin id augue pharetra ex efficitur ultrices. Vivamus non tortor scelerisque, dignissim lacus nec, sollicitudin odio.
  `,
  'Details': `
  Donec in hendrerit orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod metus sem, vitae accumsan augue volutpat id. Nullam et dolor vitae nibh rhoncus aliquet. Etiam id sem risus. Vivamus lacus diam, egestas vel lacus vel, ultrices vestibulum nunc. Suspendisse potenti. Suspendisse sit amet ultricies sapien. Integer urna augue, pretium sit amet feugiat in, aliquam in turpis. Cras id tempus ex. Sed massa mi, feugiat sed fermentum eget, iaculis non sapien. Sed aliquam eu nulla id vestibulum. Suspendisse in leo commodo, hendrerit justo id, venenatis ligula. Integer lorem est, elementum vitae condimentum eget, dapibus ut dolor. Fusce cursus ut felis non vestibulum.
  `,  
  'Photos': `
  Nunc nec odio convallis, auctor diam sed, mattis purus. Pellentesque consectetur eros diam. Cras venenatis sapien ipsum, ac congue ante gravida quis. Donec ut risus sit amet sem bibendum lobortis at non ipsum. Quisque vel sapien nibh. Sed tincidunt urna vel ligula varius, eget commodo quam viverra. Nulla placerat pretium suscipit. Sed vel elementum elit. Fusce sit amet tortor mauris. Vestibulum dictum quam non pulvinar placerat.
  `,
  'Contact': `
  Morbi sit amet fringilla nibh. Suspendisse potenti. Aliquam id lectus sed purus suscipit vehicula. Morbi pharetra blandit mollis. Aliquam commodo quam luctus erat aliquet, eget convallis mauris pulvinar. Sed nulla augue, dapibus iaculis consequat eu, scelerisque id sapien. Aenean ut faucibus massa, nec aliquam urna. Maecenas fringilla venenatis elit et facilisis. Cras sed justo dui.
  `,  
}

function App() {

  const [conts] = useState(tabContents);

  return (
    <div className="app">
      <Tabs entries={conts}/>
    </div>
  );
}

export default App;
