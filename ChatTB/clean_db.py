import sqlite3

# Establishing a connection with the database
connection = sqlite3.connect('chat.db')
cursor = connection.cursor()

# Clearing the table
cursor.execute('''
DELETE FROM msg
''')

# Saving the changes and closing the connection
connection.commit()
connection.close()
print("Chat table cleared")
