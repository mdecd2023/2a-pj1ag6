var tipuesearch = {"pages": [{'title': 'About', 'text': '第六組 \n 組長: 41023104 呂佳柔 ， 組員：41023112 王啟騰 \n 網頁\xa0 https://mdecd2023.github.io/2a-pj1ag6/content/index.html \xa0 \n 倉儲\xa0 https://github.com/mdecd2023/2a-pj1ag6 \xa0 \n', 'tags': '', 'url': 'About.html'}, {'title': 'Schedule', 'text': 'week1 加入 teams 課程，建立 resume-github 帳號倉儲，分組協同專案 2a-pj1agx \n week2 228連假 \n week3 建立靜態網站 \n week4\xa0b ubbleRub tutorial 製作 \n week5 建立Tcexam考試帳號，使用 latex 範本開始製作專題報告 \n week6\xa0 Tcexam 小考，建立 pj1 統整協同作業', 'tags': '', 'url': 'Schedule.html'}, {'title': 'w3', 'text': 'w3 - 2023.03.10.16 已經完成分組網頁者，可以得到分組網頁評分 \n w3 - 請各組寫一個程式判定 2a 哪一組已經完成網頁建置. \n w3 開始執行 \xa0 https://mde.tw/pjcopsim/content/bubbleRobTutorial.html \n 星期四補課時間， 要驗收 Tutorial1 (心得，展示頁面說明各組員所完成項目，說明該組的專案規劃) \n 甲班Github帳號\xa0 2a.txt \n', 'tags': '', 'url': 'w3.html'}, {'title': 'CoppeliaSim-note', 'text': '1.在泡泡球機器人中使用何種程式碼? \n Lua語言。由巴西里約熱內盧天主教大學的一個研究團隊所開發，使用了 V-REP 仿真軟件中的 API ，是一種輕量級、高效、可擴展的腳本語言，被廣泛用於遊戲開發、嵌入式系統、Web應用、科學計算等領域。 \n \n 2.這段 Lua 程式碼中哪一行是控制泡泡球機器人運行的間距 ? \n 第18行中 clearance 為間隙，單位是 meter 公尺。 \n \n \n 3..在 CoppeliaSim 中，scene 與 model 有何不同 ? \n 兩者都是表示場景中的物體，但一個 scene 中可以有多個 model ，一個 model 卻只屬於一個 scene。 \n scene 通常代表模擬仿真場景，例如：燈光、物體、傳感器、環境等等。 \n model 代表單獨一個物體，例如：機器人、物體、傳感器等等，通常包含自身的屬性、位置、旋轉、網格模型等等特性。 \n \n 4..在 CoppeliaSim scene 中，何謂 clean model ? \n clean model 是一個工具，可以刪除未使用的對象和場景元素，壓縮模型文件大小，將模型的場景數據進行優化和精簡，從而提高模擬效率。在 CoppeliaSim 中通過點擊 File > Clean Model 打開 Clean Model 工具。 \n \n 5..CoppeliaSim 的 .ttt 檔案格式與 .simscene.xml 檔案格式有何不同 ? \n .ttt檔案格式：CoppeliaSim 的原始檔案格式， 包含了 CoppeliaSim 環境中的所有內容，包括場景、物體、燈光、相機、機器人、腳本等等。 \n 1. 用於保存完整的 CoppeliaSim 模擬場景 \n 2. 可以在不同的 CoppeliaSim 版本之間進行互相轉換 \n 3.由於是二進制格式，因此不太容易進行版本控制和合併等操作 \n .simscene.xml檔案格式： CoppeliaSim 的場景文件格式，包含了 CoppeliaSim 環境中的場景和物體，不包括其他元素如腳本和機器人等。 \n 1.用於保存和分享 CoppeliaSim 的場景和模型 \n 2.可以輕鬆進行版本控制和合併等操作 \n 3.不支持保存和加載腳本和機器人等元素 \n', 'tags': '', 'url': 'CoppeliaSim-note.html'}, {'title': 'Projects', 'text': '課程內容', 'tags': '', 'url': 'Projects.html'}, {'title': 'Dynamic site', 'text': '\n \n 下載 portable_python 以 startIpv6 開啟小黑窗，變更到需要的資料夾 (後退cd..，更換資料夾:，結束ctrl c) \n \n 輸入 git clone https://github.com/mdecycu/cmsimde.git  作為倉儲的 cmsimde 目錄 \n 輸入\xa0git clone https://github.com/mdecd2023/2a-pj1agx.git 克隆github自己組別空白倉儲 \n \n 從 up_dir 取出所有檔案放入 2a-pj1agx 倉儲的根目錄，可以 cms 啟動 dynamic site \n \n \n 建立 token\xa0 放入 .git/config 中的 URL﹑加上@，就可直接在動態網頁中進行改版 \n 以 generate_pages 轉為靜態後, 直接以 acp 進行 git add, commit 與 push \n \n', 'tags': '', 'url': 'Dynamic site.html'}, {'title': 'Portable Python', 'text': '自製 Portable Python 流程 (可以隨身, 可以啟動不同權限, 可以配置不同模組) \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n', 'tags': '', 'url': 'Portable Python.html'}, {'title': 'Wink3', 'text': '動態頁面嵌入 Wink 影片的 html \n <script>// <![CDATA[\nvar winkVideoData_40923151 = {\n  dataVersion: 1,\n  frameRate: 10,\n  buttonFrameLength: 5,\n  buttonFrameOffset: 2,\n  frameStops: {\n  },\n};\n// ]]></script>\n</p>\n<!-- 接下來將 mp4 檔案從 downloads 目錄取出 -->\n<div class="winkVideoContainerClass"><video width="1008" height="630" autoplay="autoplay" class="winkVideoClass" controls="controls" data-dirname="./../cmsimde/static" data-varname="winkVideoData_40923151" muted="true">\n<source src="./../downloads/w10_cube.mp4" type="video/mp4" /></video></div> \n 以下為示範影片 \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n', 'tags': '', 'url': 'Wink3.html'}, {'title': 'SciTE', 'text': '在 week6 時於 SciTE 執行 simpleTest_19997.py，發現 CoppeliaSim 文字區並未顯示"這個 Python remote API 將會連續執行 1 秒鐘, 歡迎進入 CoppeliaSim 的虛擬世界!"，且該文字在 SciTE 中顯示為亂碼 \n 解決方法: \n 由於 SciTE 預設似乎是採用西方語言編碼的，會把一中文字元視為兩個單位元組字元，才會呈現亂碼。 \n SciTE -> Option -> Open User Options File。在裡面新增： \n code.page=65001 \n output.code.page=65001 \n save', 'tags': '', 'url': 'SciTE.html'}, {'title': 'tutorial1', 'text': 'bubbleRob圖檔 \n 以CoppeliaSim模擬兩球碰撞 \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n \n BubbleRob \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n 附在bubbleRob身體上的接近傳感器 \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n 接近傳感器、電機和輪子 \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n', 'tags': '', 'url': 'tutorial1.html'}, {'title': 'Lua', 'text': '盡可能理解程式碼，便於未來製作專案 \n sysCall_vision(inData)  函數傳入一個名為 inData 的參數，用來處理視覺相關的資料。 \n 在函數內部，程式碼使用 simVision 模組提供的函數來處理視覺相關的操作， sensorImgToWorkingImg  將視覺傳感器的圖像複製到工作圖像中， edgeDetectionOnWorking  對工作圖像執行邊緣檢測， workImgToSensorImg  將工作圖像複製回視覺傳感器圖像緩衝區中。 \n sysCall_init()  函數是初始化函數，當程式啟動時會自動執行。但此函數目前內部為空，沒有任何操作。 \n 另外在 CoppeliaSim 中，每個場景中的物體都有一個唯一的識別符號，稱為 "句柄\xa0 handle "。handle 在計算機編程中是常用的術語，為一個整數，可以用來識別不同的物體或場景中的元件。 \n 為了處理 CoppeliaSim 中的視覺感測器的操作，並在程式初始化時執行。 \n \n speedChange_callback  的函數定義了當\xa0ui 中相應的控制元件的值發生改變時，會自動執行此函數。該函數會接收三個參數： \n \n ui  表示當前\xa0ui 界面的狀態和控制元件的屬性，可以通過它來獲取相關的資訊。 \n id\xa0 表示控制元件的 id，可以通過它來判斷是哪個控制元件發生了值的改變。 \n newVal\xa0 表示控制元件的新值，即使用者設置的新值。 \n \n 在函數內部，程式碼會使用一個數組 minMaxSpeed\xa0計算新的速度值 ，其中  minMaxSpeed[1]  表示速度的最小值， minMaxSpeed[2]  表示速度的最大值。然後根據控制元件的新值  newVal ，通過簡單的線性插值計算出新的速度值，並將其存儲在  speed  變數中。 \n 用於根據\xa0ui\xa0中的控制元件值的改變，動態調整程式中的速度變數。 \n \n sysCall_init()  函數執行於模擬場景開始運行時， 只執行一次，且是第一次執行這個腳本。 \n 通過  sim.getObject()  函數獲取 BubbleRob 模型的不同元件的句柄，並且將它們存儲到相應的變量中。 \n bubbleRobBase=sim.getObject(\'.\')  獲取 BubbleRob 模型的基座物件的句柄，即 BubbleRob 的根物件。 \n leftMotor=sim.getObject("./leftMotor")  獲取 BubbleRob 模型中左側馬達的句柄。 \n rightMotor=sim.getObject("./rightMotor")  獲取 BubbleRob 模型中右側馬達的句柄。 \n noseSensor=sim.getObject("./sensingNose")  獲取 BubbleRob 模型中前方傳感器的句柄。 \n 獲取物件句柄可以讓我們在後續的程式碼中控制 BubbleRob 模型的運動。 \n', 'tags': '', 'url': 'Lua.html'}, {'title': 'pj1', 'text': '', 'tags': '', 'url': 'pj1.html'}, {'title': 'w6', 'text': '已 完成連線的分組 \n ag1 \n ag2 \n ag5 \n ag6 \n ag7 \n ag8 \n ag9 \n ag10 \n ag11 \n ag12 \n ag13 \n ag14 \n ag15 \n ag16 \n ag17 \n ag18 \n ag21 \n 未完成連線的分組組員學號 \n ag3-41023108\xa041023110 \n ag4-41023125 41023128 \n ag19-41023101 41023141 \n ag20-41023105 41023109 \n \n', 'tags': '', 'url': 'w6.html'}, {'title': 'Tcexam', 'text': '2a_w6-與 cd2023 課程有關的敘述 \n T： cd2023 課程的 team code 為: 2q56a7l \n F： cd2023 的主要課程目標是建一個六軸機械臂的模擬場景 \n (更正) 主要課程目標是 開發一款能在 web-based CoppeliaSim 場景中雙方或多方對玩的遊戲產品 \n F： 有關 cd2023 bubbleRob 場景製作練習 child script, bubbleRobBase=sim.getObject(\'.\') 其中的 \'.\' 表示要取出所有場景中的物件 \n (更正) 這行程式碼僅會獲取模型的根物體的句柄。根物體是代表機器人的物體。 \n T： cd2023 專案一中有關 CoppeliaSim 所製作的練習場景 robot 名稱為 bubbleRob \n T： cd2023 中的第一個作業的倉儲名稱為 "resume-" 然後加上個人的 github 帳號 \n \n \n Question： \n stud2 是一台 Ubuntu server, 讓每一個用戶透過兩個 ports 共享 server\xa0 中所設置的外部與內部 ports. \n Answer： \n T)其中以 9 開頭的 port 設定為內部 port,\xa0 而 8 開頭的 port 則用於外部連線 \n F) 其中以\xa08 開頭的 port 設定為內部 port,\xa0 而\xa09 開頭的 port 則用於外部連線', 'tags': '', 'url': 'Tcexam.html'}, {'title': '協同設計', 'text': '要點： \n \n 參與協同者能否 同步並發 執行所被交付的內容 \n 能否保留每一個階段所從事的設計版本 \n 能否確認哪一階段的哪一事項是由哪位成員所完成 (可居功而且無法諉過) \n 了解採用不同設計流程的原因，目的與所可能遭遇的問題，讓協同者可在逐步改版過程接近預設目標 \n \n 工作分配： \n 呂佳柔41023104：建立靜態，維護動態 \n 王啟騰41023112：拍攝wink，專案規劃 \n', 'tags': '', 'url': '協同設計.html'}, {'title': '專案規劃', 'text': '\n 需求分析：了解系統的功能需求和使用者需求，進行系統需求分析和使用者調查。 \n 設計規劃：基於需求分析，設計系統的整體架構、介面和功能。制定技術規格，選擇技術框架、編程語言等。 \n 程式開發：根據設計規劃，進行編程、測試、調試等相關工作。同時，確保程式代碼的品質和穩定性。 \n 整合測試：將各個模塊整合測試，保證整個系統的穩定性、可用性和可靠性。 \n 上線部署：將系統部署到正式環境中，確保系統能夠正常運行。此外，確保系統的性能、安全和穩定性。 \n 維護與更新：為了確保系統的可靠性和穩定性，需要定期進行系統的維護和更新。這包括更新程式代碼、更新資料庫、修復錯誤和漏洞等。 \n \n', 'tags': '', 'url': '專案規劃.html'}]};