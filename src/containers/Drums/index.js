import PageHeader from 'components/PageHeader';
import DrumMachine from './DrumMachine';
import './styles.scss';

export default function DrumsPage() {
  return <div>
    <PageHeader title="Drums" subtitle="Create beat" />
    <div className="page-content">
      <DrumMachine />
    </div>
  </div>
}