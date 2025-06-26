from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/create_user', methods=['GET', 'POST'])
def create_user():
    if request.method == 'POST':
        try:
            with Session(engine) as session:
                user = User(
                    user_type=request.form.get('user_type'),
                    name = request.form.get('name'),
                    district = request.form.get('district'),
                    age = request.form.get('age')
                )
                session.add(user)
                session.commit()
                user2 = User_Login(id=user.id, username=request.form.get('username'), password=request.form.get('password'))
                session.add(user2)
                session.commit()
                if request.form.get('user_type') == 'Tutor':
                    tutor = Tutor(id=user.id, subjects=request.form.get('subjects'))
                    session.add(tutor)
                    session.commit()
                elif request.form.get('user_type') == 'Student':
                    student = Student(id=user.id, teacher_id=request.form.get('teacher_id'), tutor_id=request.form.get('tutor_id'), grade=request.form.get('grade'), stored_chats=request.form.get('stored_chats'), staring_assessment=request.form.get('staring_assessment'), current_subject=request.form.get('current_subject'), progress_percentage=request.form.get('progress_percentage'))
                    session.add(student)
                    session.commit()
            return f"User created successfully!"
        except Exception as e:
            return f"Error: {str(e)}"
    return "User created"