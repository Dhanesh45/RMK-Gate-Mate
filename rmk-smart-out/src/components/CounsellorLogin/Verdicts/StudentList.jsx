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
    { name: "MANOJ B V", reg: "111723203124", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "JAYAVARSINI M", reg: "111723203041", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "KAMALI V", reg: "111723203042", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "KANISH REDDY CHITTOOR", reg: "111723203043", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "KARAN KUMAR D", reg: "111723203044", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "KARTHIKEYAN J", reg: "111723203045", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "KAVIYA R", reg: "111723203046", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "KAYALVIZHI V", reg: "111723203047", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "KIRUBA NITHI P", reg: "111723203048", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "KIRUTHIKA A", reg: "111723203049", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "KOVVURI BALA MANI RAM REDDY", reg: "111723203050", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "KRITHIKA E", reg: "111723203051", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "LAKSITA M", reg: "111723203052", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "LOGESH KUMAR K J", reg: "111723203053", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "M K VETREVEL", reg: "111723203054", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "MADHESH P", reg: "111723203055", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "MAHALAKSHMI A V N K", reg: "111723203056", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "MELWIN R", reg: "111723203057", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "MOHAMED SAMEER M", reg: "111723203059", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "MOHAN V", reg: "111723203060", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "MOHANKUMAR H", reg: "111723203061", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "MONIKA K", reg: "111723203062", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "MUGESH RAJ M", reg: "111723203063", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "MUKIL SANKAR", reg: "111723203064", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "NANCY LILLY MARIA C S", reg: "111723203065", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "NETHIYA SREE M", reg: "111723203066", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "NITHYANANDHAM J", reg: "111723203067", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "OBILI SAI KOUSHIK", reg: "111723203068", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "PALADUGU PURNA", reg: "111723203069", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "PARVATHA SRINI K P", reg: "111723203070", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "POOJITHA N", reg: "111723203071", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "PRASANTH M", reg: "111723203072", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "PRASANTH R", reg: "111723203073", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "PRAVEENKUMAR R", reg: "111723203074", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "PRIYADARSHINI K", reg: "111723203075", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "PRIYAJOTHI N", reg: "111723203076", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "PRIYAVARSHINI A", reg: "111723203077", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "R SHAMGANESH", reg: "111723203078", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "RAGHUL B", reg: "111723203080", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "THIRUMALAI SELVAN G", reg: "111723203122", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "JUVVALA RISHITH", reg: "111723203125", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "SHRUTHI A", reg: "111723203301", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "RAGHUL S", reg: "111723203081", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "RAJASHWARI G B", reg: "111723203082", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "RAKESH KUMAR S", reg: "111723203083", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "REETHU P", reg: "111723203084", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "ROGITH P M", reg: "111723203085", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "S KAUSHIK", reg: "111723203086", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "SACHIN S V", reg: "111723203087", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "SAM SOLOMON R", reg: "111723203088", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "SANGEETH S KUMAR", reg: "111723203089", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "SANJAIPRIYAN A", reg: "111723203090", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "SANJAY J K", reg: "111723203091", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "SANNAREDDY SAI BHARADWITHA REDDY", reg: "111723203092", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "SANTHOSH KANNA M", reg: "111723203093", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "SATHISH M", reg: "111723203094", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "SELVA KUMAR S", reg: "111723203095", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "SHAI SANKAR A K", reg: "111723203096", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "SHAIK SHEEREN TAJ", reg: "111723203097", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "SHAKTHI K", reg: "111723203098", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "SINDUJA D", reg: "111723203099", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "SUDHA LAKSHMI B", reg: "111723203100", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "SUDHAN GOWTHAM S", reg: "111723203101", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "SUNIL KUMAR S", reg: "111723203102", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "SURYA K", reg: "111723203103", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "SUTHAKARAN P", reg: "111723203104", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "SWETHA R", reg: "111723203105", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "TAMIL SELVAN S", reg: "111723203106", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "THRISHA V", reg: "111723203107", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "TITUS G", reg: "111723203108", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "V KISHOR", reg: "111723203109", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "V SHRIRAM", reg: "111723203110", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "VELUTHAI V", reg: "111723203111", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "VIJAY ATHETHYAN R", reg: "111723203112", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "VIJAYALAKSHMI S R", reg: "111723203113", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "VIJHAYA SHREE A", reg: "111723203114", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "VISHAL RAVIKUMAR", reg: "111723203115", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "VISHWA N", reg: "111723203116", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "VOGGU TEJA V", reg: "111723203117", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "YADHU KRISHNA U S", reg: "111723203118", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "KASHVITH D", reg: "111723203123", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "LAVANYA N", reg: "111723203301", email: "231084.it@rmkec.ac.in", year: "II & A" },
    { name: "MOHAN KUMAR R", reg: "111723203302", email: "231084.it@rmkec.ac.in", year: "II & A" }

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
  