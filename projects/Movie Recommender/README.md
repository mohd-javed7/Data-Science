# 🎬 Movie Recommendation System (Dynamic, Self-Growing Engine)

An advanced **Movie Recommendation System** built with **Python, FastAPI, and React.js** — capable of learning from new searches and dynamically updating its dataset.  
Unlike traditional recommenders limited to static datasets, this model grows smarter with every user query.

---

## 🚀 Features

- 🔍 **Dynamic Search** — recommends movies even if they aren’t in the original dataset using an external API.
- 🧠 **Self-Learning** — newly searched movies are vectorized and added to the dataset with updated similarity scores.
- 🎞️ **Trending Movies Page** — beautiful landing page showing trending movies of the week.
- 💬 **Interactive Recommendation Page** — displays suggested movies in styled cards (not JSON!) with:
  - Title, Year, Rating  
  - Overview & Cast (with images)  
  - Movie trailer link  
- 🔐 **User Login & Signup (Frontend Ready)** — authentication pages built, backend integration coming soon.
- ⚙️ **Backend (for model) Powered by FastAPI ** — ready for deployment when resources allow.
- 💅 **Frontend Built with React.js + TailwindCSS**
- ** Backend (for user-databse handling)** - Using Node.js,expresss.js and moongose to handle the dataabse.

---

## 🧾 How It Works

1. User enters a movie name in the search bar.  
2. The model has been trained on a rich movie dataset that includes:
   - **Title, Cast, Crew, Director, Overview, Tagline, and Plot**
3. All these textual features are merged into **tags**.
4. The tags are then **vectorized using TF-IDF**, ensuring unique and meaningful word importance.
5. Using **Cosine Similarity**, the system computes how similar each movie is to others.
6. Based on similarity scores, the top 5 most similar movies are recommended.
7. If a movie is **not in the dataset**, the model:
   - Fetches data via API  
   - Vectorizes the new movie  
   - Updates dataset and similarity matrix dynamically  
   - Saves this for future recommendations (self-growing behavior)
8. FastAPI handles backend logic, serving recommendations to the React frontend as JSON.
9. The frontend renders them beautifully as movie cards.

---

## 🧠 Tech Stack

**Languages & Frameworks:**  
- Python, FastAPI  
- React.js(react-router-dom, react-icons, lucide-react, axios), TailwindCSS,

**Libraries Used:**  
- Pandas, NumPy  
- Scikit-learn (TF-IDF, Cosine Similarity)  
- Requests (for API calls)

**Tools:**  
- GitHub LFS (for large model storage)  
- Render / Local Deployment (FastAPI ready)

---

## 📸 Screenshots

| Home Page 
<img width="1366" height="768" alt="{2E9915C8-432D-4136-8A21-AC63D50059C0}" src="https://github.com/user-attachments/assets/62449d18-427b-49c6-afec-c648b2ff8b58" />
<img width="1366" height="768" alt="{DCF97A41-4A4B-4442-B3DD-E42AC358EF4D}" src="https://github.com/user-attachments/assets/b6f15c97-d8b3-4900-b3ad-eadeabaaa274" />
<img width="1366" height="768" alt="{5ACF5952-92F2-4D23-8EB5-A61158E4182C}" src="https://github.com/user-attachments/assets/56d33f92-50b2-4039-95f9-85b360ea8f64" />




| Recommendation Results
<img width="1366" height="768" alt="{82B7F1A4-8925-4D7D-9975-9DD0865AA425}" src="https://github.com/user-attachments/assets/d8443b8f-9a97-4032-9803-93a2c8bba84f" />
<img width="1366" height="768" alt="{E749184B-A22C-42EC-9D5A-12A33393FEDA}" src="https://github.com/user-attachments/assets/20949632-786c-4797-9e00-f6f0f336af3e" />


| Movie Details |

<img width="1366" height="768" alt="{EBC1F84D-7405-46CD-A154-ABD57BCC574E}" src="https://github.com/user-attachments/assets/df1335ab-d150-4169-a676-7c3a11992907" />
<img width="1366" height="768" alt="{EAD469A8-988F-46CB-BF35-5EBEA3E69E5D}" src="https://github.com/user-attachments/assets/1a1d0c6b-e2aa-4b30-94a2-f22e470c79ce" />

---

## ⚙️ Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/mohd-javed7/Data-Science/tree/main/projects/Movie%20Recommender/Model/model-recommend
