import streamlit as st
import openai

# Set your OpenAI API key
# openai.api_key = ""

# Function to generate a query based on the selected pet and emotion
def generate_query(pet_type, emotion):
    query = f"I have a {pet_type} who is feeling {emotion}. Can you recommend some activities for us?"
    return query

# Function to call the OpenAI API and get activity recommendations
# Function to call the OpenAI API and get activity recommendations
def get_activity_recommendations(query):
    completions = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",  # Update model name if needed
        messages=[
            {"role": "system", "content": query}
        ]
    )
    activity_recommendations = completions.choices[0].message["content"]
    return activity_recommendations

# Set Streamlit page title and layout
st.set_page_config(page_title="Petwell", layout="centered")

# Add custom CSS styles
st.markdown("""
    <style>
        body{
            background-color: black !important;
            font-family: Arial, sans-serif;
        }
        .header {
            color: black;
            font-size: 40px;
            font-weight: bold;
            margin-bottom: 20px;
            background-colour: black;
            text-align: center;
        }
        .subheader {
            color: black;
            font-size: 23px;
            margin-top: 20px;
        }
        .output-box {
            background-color: #ffffea;
            padding: 10px;
            border-radius: 5px;
            color: black;
        }
    </style>
""", unsafe_allow_html=True)

# Display title and welcome message
st.markdown('<h1 class="header">Activity Recommendation</h1>', unsafe_allow_html=True)
st.markdown('<p class="subheader">Welcome to Petwell, your personalized pet activity recommendation tool!</p>', unsafe_allow_html=True)
# Create select boxes for pet type and emotion
option_pet = st.selectbox("Select Type of Pet", ["None", "Cat", "Dog", "Bird", "Fish", "Leopard", "Bearded Dragon", "Hen", "Cow", "Buffalo", "Goat", "Sheep", "Rabbit", "Mice", "Sugar Glider", "Fennec Fox", "Monkey", "Frog", "Butterfly", "Parrot", "Pig", "Owl", "Hamster", "Turtle"])
option_emotion = st.selectbox("Select Type of Emotion", ["None", "Sad", "Fearful", "Anxious", "Disgusted", "Hateful", "Traumatized", "Sleepless", "Tired", "Surpirsed", "Angry", "Happy"])

# Conditionally display recommendation based on selected pet and emotion
if option_pet != "None" and option_emotion != "None":
    query = generate_query(option_pet, option_emotion)
    st.write("Generated Query:", query)

    activity_recommendations = get_activity_recommendations(query)
    st.markdown(f'<h2 class="subheader">Activity Recommendations:</h2><p class="subheader"></p>', unsafe_allow_html=True)
    st.markdown(f'<div class="output-box">{activity_recommendations}</div>', unsafe_allow_html=True)