"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFiles = void 0;
const fs_1 = __importDefault(require("fs"));
const csvtojson_1 = __importDefault(require("csvtojson"));
const dbSourse_1 = require("../db/dbSourse");
const getFiles = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const files = yield fs_1.default.promises.readdir("data");
        return files;
    }
    catch (err) {
        throw err;
    }
});
exports.getFiles = getFiles;
const uploadFile = (fileName) => __awaiter(void 0, void 0, void 0, function* () {
    const dataByJSON = yield (0, csvtojson_1.default)().fromFile(`data/${fileName}`);
    const tableName = getTableName(fileName);
    // tableName === "Orders" && console.log(dataByJSON);
    try {
        yield dbSourse_1.AppDataSource.initialize();
        yield dbSourse_1.AppDataSource.createQueryBuilder()
            .insert()
            .into(tableName)
            .values(dataByJSON)
            .execute();
    }
    catch (err) {
        console.log(err);
    }
});
const getTableName = (fileName) => {
    return fileName.split(".").at(0);
};
const generateDataToDB = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const files = (0, exports.getFiles)();
    yield Promise.all((_a = (yield files)) === null || _a === void 0 ? void 0 : _a.map((file) => {
        uploadFile(file);
    }));
    return "Files uploaded";
});
generateDataToDB();
//# sourceMappingURL=uploadData.js.map