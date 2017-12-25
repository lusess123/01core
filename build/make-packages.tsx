let pkg =  require("./../package.json");
console.log("开始创建发布包: "+pkg.name);
import * as  fs from 'fs';


delete pkg.scripts;



fs.writeFileSync('./dist/cjs/package.json', JSON.stringify(pkg, null, 2));