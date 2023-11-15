from asyncio.windows_events import NULL
import pyodbc

class ConnDB:
    def __init__(self):
        DRIVE_NAME = 'SQL Server'
        SERVER_NAME = '.\\SQLEXPRESS'
        DATABASE_NAME = 'AppCompras'
        self.connectionString = f"""
            DRIVER={{{DRIVE_NAME}}};
            SERVER={SERVER_NAME};
            DATABASE={DATABASE_NAME};
        """

    def teste(self):

        conn = pyodbc.connect(self.connectionString)
        
        cursor = conn.cursor()

        cursor.execute("sl_loginP 'Hansol', 'stwr478'")
        
        table = cursor.fetchval()

        if table:
            print('batata')


        print(table)

    def verifLogin(self, user, senha):
        conn = pyodbc.connect(self.connectionString)
        cursor = conn.cursor()
        cursor.execute(F"sl_loginP '{user}', '{senha}'")
        retornoVerif = cursor.fetchall()
        cursor.close()
        conn.close()
        if retornoVerif[0][0]:
            return True
        return False
    
    def cadastrar(self, user, email, senha, confirmSenha):
        conn = pyodbc.connect(self.connectionString)
        cursor = conn.cursor()
        cursor.execute(F"EXEC in_cadastrarP '{user}', '{email}', '{senha}', '{confirmSenha}'")
        try:
            retorno = cursor.fetchall()
            if not retorno[0][0]:
                retorno = False 
        except:
            retorno = True
        cursor.commit()
        cursor.close()
        conn.close()
        if retorno:
            return True
        return False
    
# db = ConnDB()
# print(db.verifLogin("Andreas", "123"))
# print(db.verifLogin("Joao", "abc1r1"))


    