import fs from "fs/promises"
//console.log(fs)
import fsn from "fs"
import path from "path"

const basepath = "E:\\Deskstop\\JS\\CODE\\Exercise15"
let files = await fs.readdir(basepath)
//console.log(files)

for (const item of files){
    console.log("Running for - ", item)
    let ext = item.split(".")[item.split(".").length-1]
    if (ext != "js" && ext != "json" && item.split(".").length > 1){
        if(fsn.existsSync(path.join(basepath, ext))){
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
        else{
            fs.mkdir(ext)
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
    }
}






