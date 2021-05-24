import PageHeader from "components/PageHeader";
import './styles.scss';

export default function HomePage() {
  return <div>
    <PageHeader title="Home" subtitle="What is this app about?" />
    <div className="page-content">
      <p>
        This is app i use to make temporary beats.
      </p>
    </div>
  </div>
}