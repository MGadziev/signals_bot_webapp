from fastapi import FastAPI, HTTPException
import asyncpg
import uuid

app = FastAPI()

# Параметры для подключения к базе данных PostgreSQL
DATABASE_URL = "postgresql://..."

# Установка соединения с базой данных
async def get_db():
    pool = await asyncpg.create_pool(DATABASE_URL)
    async with pool.acquire() as connection:
        yield connection

@app.get("/test/")
async def test():
    return 200

# Обработчик POST запроса на создание ссылки и сохранение данных в базу
@app.get("/generate_payment_link/")
async def generate_payment_link(email: str, userid: int):
    # Генерируем уникальный идентификатор для ссылки
    payment_id = str(uuid.uuid4())

    # Создаем ссылку для оплаты в платежной системе (здесь просто пример)
    payment_link = f"https://yookassa.com/pay/{payment_id}"
    print(payment_link)
    try:
        # Сохраняем данные в базе данных
        async with get_db() as db:
            await db.execute(
                "INSERT INTO payments (payment_id, email, userid) VALUES ($1, $2, $3)",
                payment_id,
                email,
                userid
            )
    except Exception as e:
        # Если произошла ошибка при сохранении данных, возвращаем HTTP 500
        raise HTTPException(status_code=500, detail="Failed to save payment information")

    # Возвращаем только идентификатор платежа, чтобы клиент мог получить ссылку через GET запрос
    return {"payment_link": payment_link}


# Запуск сервера FastAPI с помощью uvicorn
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)

#%%
