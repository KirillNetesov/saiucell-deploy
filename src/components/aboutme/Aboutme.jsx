import React from "react";
import { aboutImg } from "../../assets/images";
import { FaDownload } from "react-icons/fa";
import SectionTitle from "../sectionTitle/SectionTitle";
import "./Aboutme.css";

const Aboutme = () => {
  return (
    <section className="about section" id="about">
      <div className="container flex-center">
        <SectionTitle title="About me" subtitle="About me" />
        <div className="about-wrapper">
          {/* Фото */}
          <div className="about-img">
            <img src={aboutImg} alt="about" />
          </div>

          {/* Описание в карточке */}
          <div className="about-info">
            <div className="about-card">
              <h3>Я, Кирилл Нетёсов</h3>
              <h4>
                SRE/DevOps/CEO специалист <span></span>
              </h4>
                <p>
                Добрый день, занимаюсь разработкой, поддержкой, автоматизацией
                и развертыванием различных проектов.
                Работаю в Отделе инноваций, архитектуры и решений (SAI) в компании
                Ucell. Занимаемся масштабными проектами такими как мобильное приложение,
                Website Ucell.uz, Lk.ucell.uz, полная поддержка и работа с troubleshooting.
                Занимаюсь разработкой программного обеспечения, как web
                приложений, так и desktop. В мои обязанности входит обслуживание
                и доработка ПО, когда возникают неполадки. Настройка метрик, логов.
                Работаем с кластером <b>Kubernetes</b>, с полным стеком сервисов —
                <b>CI/CD</b>, <b>ArgoCD</b>, <b>Prometheus</b>, <b>Grafana</b>, 
                <b>VictoriaMetrics</b>, <b>ClickHouse</b>, <b>Fluent Bit</b>, <b>Kafka</b>, 
                <b>RabbitMQ</b> и другими инструментами мониторинга и интеграции.
		</p>
              <ul className="professional-list">
                <li className="list-item">
                  <span className="number">2+</span>
                  <span className="text">опыта в SRE/DevOps/CEO</span>
                </li>
                <li className="list-item">
                  <span className="number">3+</span>
                  <span className="text">Ведения проектов</span>
                </li>
                <li className="list-item">
                  <span className="number">5</span>
                  <span className="text">Успешных проектов</span>
                </li>
              </ul>
              <a 
                  href="/files/Kirill_Netesov_Resume.pdf" 
                          download 
                          className="btn"
                   >
                  Скачать резюме <FaDownload />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
