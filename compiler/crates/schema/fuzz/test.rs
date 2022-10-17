use schema::build_schema;
use libfuzzer_sys::fuzz_target;

fuzz_target!(|data: &[u8]| {
    let s = String::from_utf8_lossy(data);
    
});

fn main() {
let a = 
r"
type A {
    key: String
}
type B {
    key: String
}
#";

let b = 
r"
type A {
    key: String
}
#";

let c =
r"
type A implements B {
    key: String
}
interface B {
    id: ID!
}
#";

let d =
r"
type A {
    key: String
}
type B implements Node {
    id: ID
    key: String
}
interface Node {
    id: ID!
}
#";

    std::fs::write("a", a).unwrap();
    std::fs::write("b", b).unwrap();
    std::fs::write("c", c).unwrap();
    std::fs::write("d", d).unwrap();
}