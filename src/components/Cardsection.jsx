import Card from "./Card";
import Data from "../json";
import {useEffect, useState} from "react";

const CardSection = () => {

  const jobFilterSelect = document.querySelector('.personal-cards-section .job-filter-select');
  const nameFilterInput = document.querySelector('.personal-cards-section .name-filter-input')

  const [data, setData] = useState(Data);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(data);
  const [job, setJob] = useState('')

  const FilteredJob = data.filter((doctors)=>{
    return doctors.job.includes(job)
  })

  const FilteredCard = data.filter((doctors) => {
    return doctors.name
      .trim()
      .toLocaleLowerCase()
      .includes(search.trim().toLocaleLowerCase());
  });

  useEffect(() => {
    setFilter(FilteredCard);
  }, [search]);

  useEffect(()=>{
    job == 'All' ? setFilter(data) : setFilter(FilteredJob);
  }, [job])

  return (
    <section className="personal-cards-section">
      <input
        className="name-filter-input"
        type="text"
        placeholder="Axtar"
        onChange={(e) => {
          setSearch(e.target.value);
          jobFilterSelect.value = 'All'
        }}
      />

      <select
        name="name"
        id=""
        className="job-filter-select"
        onChange={(e) => {
          setJob(e.target.value);
          nameFilterInput.value = ''
        }}
      >
        <option value="All">All</option>

        {data.map((item) => {
          return <option value={item.job}>{item.job}</option>;
        })}
      </select>

      <div className="row card-container">
        {filter.length > 0
          ? filter.map((item) => {
              return <Card key={item.id} information={item} />;
            })
          : "hecne tapimadi"}
      </div>
    </section>
  );
};

export default CardSection;
