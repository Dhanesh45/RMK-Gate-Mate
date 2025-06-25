const students = [
    { name: "AAKASH M", reg: "111723203001", email: "230508.it@rmkec.ac.in", year: "II & A" },
    { name: "ABHISHEK P", reg: "111723203002", email: "230098.it@rmkec.ac.in", year: "II & A" },
    { name: "ABINAYA S", reg: "111723203003", email: "230102.it@rmkec.ac.in", year: "II & A" },
    { name: "ADITHYA BABA B", reg: "111723203004", email: "230693.it@rmkec.ac.in", year: "II & A" },
    { name: "AGILA A", reg: "111723203005", email: "230831.it@rmkec.ac.in", year: "II & A" },
    { name: "AJITH KUMAR S", reg: "111723203006", email: "230181.it@rmkec.ac.in", year: "II & A" },
    { name: "ANANDHI S G", reg: "111723203007", email: "231023.it@rmkec.ac.in", year: "II & A" },
    { name: "ANUSUYA V", reg: "111723203008", email: "230104.it@rmkec.ac.in", year: "II & A" },
    { name: "ARUL JOTHEE B", reg: "111723203009", email: " 230522.it@rmkec.ac.in", year: "II & A" },
    { name: "BHAVADHARANI D", reg: "111723203010", email: "230205.it@rmkec.ac.in", year: "II & A" },
    { name: "BHUVANESHWARI K", reg: "111723203011", email: "230050.it@rmkec.ac.in", year: "II & A" },
    { name: "BHUVANESHWARI S", reg: "111723203012", email: "230007.it@rmkec.ac.in", year: "II & A" },
    { name: "SRUTHI SHREE C K", reg: "111723203013", email: "2301057.it@rmkec.ac.in", year: "II & A" },
    { name: "CHENDRAYA SARAVANAN V", reg: "111723203014", email: "230543.it@rmkec.ac.in", year: "II & A" },
    { name: "VINISHYA D", reg: "111723203015", email: "230528.it@rmkec.ac.in", year: "II & A" },
    { name: "DEEPAKRAJ K", reg: "111723203016", email: "230553.it@rmkec.ac.in", year: "II & A" },
    { name: "DEEPIKA A", reg: "111723203017", email: "230114.it@rmkec.ac.in", year: "II & A" },
    { name: "DEGA DHANUSH", reg: "111723203018", email: "230679.it@rmkec.ac.in", year: "II & A" },
    { name: "DEIVANAI AR", reg: "111723203019", email: "230248.it@rmkec.ac.in", year: "II & A" },
    { name: "DEVASRI K", reg: "111723203020", email: "230819.it@rmkec.ac.in", year: "II & A" },
    { name: "DHANESH P", reg: "111723203021", email: "230550.it@rmkec.ac.in", year: "II & A" },
    { name: "DHANRAJ G", reg: "111723203022", email: "230145.it@rmkec.ac.in", year: "II & A" },
    { name: "DHARSHINI S", reg: "111723203023", email: "230593.it@rmkec.ac.in", year: "II & A" },
    { name: "DHINESH B", reg: "111723203024", email: "230239.it@rmkec.ac.in", year: "II & A" },
    { name: "DIVYADHARSHNI G", reg: "111723203025", email: "230774.it@rmkec.ac.in", year: "II & A" },
    { name: "GANESAN A", reg: "111723203026", email: "230028.it@rmkec.ac.in", year: "II & A" },
    { name: "GANGA S", reg: "111723203027", email: "230245.it@rmkec.ac.in", year: "II & A" },
    { name: "GNAANESH S A", reg: "111723203028", email: "230995.it@rmkec.ac.in", year: "II & A" },
    { name: "GOKUL M", reg: "111723203029", email: "230404.it@rmkec.ac.in", year: "II & A" },
    { name: "GOWTHAM S", reg: "111723203030", email: "230554.it@rmkec.ac.in", year: "II & A" },
    { name: "GRACELIN J", reg: "111723203031", email: "230254.it@rmkec.ac.in", year: "II & A" },
    { name: "HARINI B", reg: "111723203032", email: "230683.it@rmkec.ac.in", year: "II & A" },
    { name: "HARIRAJAN S", reg: "111723203033", email: "230213.it@rmkec.ac.in", year: "II & A" },
    { name: "HARISH E", reg: "111723203034", email: "230329.it@rmkec.ac.in", year: "II & A" },
    { name: "HARISTHA S", reg: "111723203035", email: "230256.it@rmkec.ac.in", year: "II & A" },
    { name: "HARRY JOEL C", reg: "111723203036", email: "230532.it@rmkec.ac.in", year: "II & A" },
    { name: "HEMANTH KUMAR K", reg: "111723203037", email: "230413.it@rmkec.ac.in", year: "II & A" },
    { name: "JAGADISH K G", reg: "111723203038", email: "230224.it@rmkec.ac.in", year: "II & A" },
    { name: "JAISHREE J", reg: "111723203039", email: "230372.it@rmkec.ac.in", year: "II & A" },
    { name: "JAISURYA L", reg: "111723203040", email: "230600.it@rmkec.ac.in", year: "II & A" },
    { name: "RAGUL T", reg: "111723203121", email: "230447.it@rmkec.ac.in", year: "II & A" },
    { name: "MANOJ B V", reg: "111723203124", email: "231084.it@rmkec.ac.in", year: "II & A" }
  ];
  
  const StudentList = () => (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "10px",
        border: "2px solid #ccc",
        overflow: "hidden",
        maxHeight: "400px", // Adjust height as needed
        display: "flex",
        flexDirection: "column"
      }}
    >
      {/* Fixed Header */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "0.5fr 1.5fr 1.5fr 2fr 1fr",
          fontWeight: "bold",
          padding: "10px",
          backgroundColor: "#f3f3f3",
          borderBottom: "2px solid #ccc",
          flexShrink: 0,
        }}
      >
        <div>SI</div>
        <div>NAME</div>
        <div>REG.NO</div>
        <div>EMAIL ID</div>
        <div>YEAR & SEC</div>
      </div>
  
      {/* Scrollable Rows */}
      <div style={{ overflowY: "auto", flex: 1 }}>
        {students.map((s, index) => (
          <div
            key={index}
            style={{
              display: "grid",
              gridTemplateColumns: "0.5fr 1.5fr 1.5fr 2fr 1fr",
              padding: "10px",
              borderBottom: "1px solid #eee",
  
            }}
          >
            <div>{index + 1}.</div>
            <div>{s.name}</div>
            <div>{s.reg}</div>
            <div>{s.email}</div>
            <div>{s.year}</div>
          </div>
        ))}
      </div>
    </div>
  );
  
  export default StudentList;
  