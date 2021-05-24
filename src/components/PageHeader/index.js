import './styles.scss';

export default function PageHeader({ title, subtitle }) {
  return (
    <div className="page-header__top">
      <div className="page-header__top-infos">
        <div className="top-infos__title">{title}</div>
        <div className="top-infos__subtitle">{subtitle}</div>
      </div>
    </div>
  )
}