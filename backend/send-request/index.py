import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка заявки на ремонт ПК на почту владельца"""

    if event.get("httpMethod") == "OPTIONS":
        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Max-Age": "86400",
            },
            "body": "",
        }

    body = json.loads(event.get("body") or "{}")
    name = body.get("name", "")
    phone = body.get("phone", "")
    description = body.get("description", "")

    smtp_password = os.environ.get("SMTP_PASSWORD", "")
    from_email = "kum151zzz@mail.ru"
    to_email = "kum151zzz@mail.ru"

    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"Новая заявка на ремонт ПК от {name}"
    msg["From"] = from_email
    msg["To"] = to_email

    html = f"""
    <h2>Новая заявка на ремонт ПК</h2>
    <p><b>Имя:</b> {name}</p>
    <p><b>Телефон:</b> {phone}</p>
    <p><b>Описание проблемы:</b> {description or 'не указано'}</p>
    <hr>
    <p style="color:gray;">Заявка с сайта ПКМастер Новосибирск</p>
    """
    msg.attach(MIMEText(html, "html"))

    with smtplib.SMTP_SSL("smtp.mail.ru", 465) as server:
        server.login(from_email, smtp_password)
        server.sendmail(from_email, to_email, msg.as_string())

    return {
        "statusCode": 200,
        "headers": {"Access-Control-Allow-Origin": "*"},
        "body": json.dumps({"ok": True}),
    }
