import { DataSource } from "typeorm";
import { CollegeStorePg } from "./db/postgres/college-store";

async function foo() {
    f = CollegeStorePg();
}

foo();