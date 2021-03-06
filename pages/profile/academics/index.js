import Head from 'next/head';
import dynamic from 'next/dynamic';
import styles from '../profile.module.scss';
import { useEffect } from 'react';

// Layout
import { Content, Header } from "../../../components/layout/layout";
import NavigationCards, { Card } from "../../../components/navigation/cards";
import Segment from "../../../components/layout/segment/segment";

//graphing
const BarGraph = dynamic(() => import('../../../components/charts/barGraph'));
const BoxPlot = dynamic(() => import('../../../components/charts/boxPlot'));
const HistogramCount = dynamic(() =>
  import('../../../components/charts/histogram').then(
    (mod) => mod.HistogramCount
  )
);
const HistogramPercent = dynamic(() =>
  import('../../../components/charts/histogram').then(
    (mod) => mod.HistogramPercent
  )
);
const ScatterPlot = dynamic(() =>
  import('../../../components/charts/scatterPlot')
);

export default function Academics() {
  useEffect(() => {
    window.scrollTo(0, document.querySelector("#content").offsetTop);
  })
  return (
    <>
      <Head>
        <title>Academics • Class Profile</title>
      </Head>

      <Header />

      <NavigationCards title={'1A Class Profile'} />

      <Content className={styles.academics}>
        <h1>Academics</h1>
        <h4>
          How has SYDE's grades faired between their admission averages and their first term? What did they think of each 1A course? What were their backups?
        </h4>

        <Segment
          title="1A Average"
          graph={<HistogramPercent datatype="1A Class Average" />}
          onTop={false}
        >
          This year engineering rankings were removed for the first time and
          instead, a grade relative-frequency histogram was provided by UW.
          <br />
          <br />
          To keep inline with these efforts, the same histogram was created with
          the data from those who answered the class profile survey.
          <br />
          <br />
          Evidently, the class profile data has a higher frequency of averages
          in the 80-89% range as well as the 90-100% range (and less in the
          other two ranges). This means that data analysis in this report done
          with grades is skewed slightly upwards - it seems many of the people
          who did not respond to the survey had averages in the 60-79% range.
        </Segment>

        <Segment
          title="Backup University"
          graph={<BarGraph datatype="Backup"  width = {800} height ={500} />}
          onTop={true}
        ></Segment>

        <Segment
          title="High School Average"
          graph={<HistogramCount datatype="HS Average" />}
          onTop={false}
        >
          The admission average was in the mid 90s - slightly higher than the
          “high 80s to low 90s” currently on the admissions website. Lots of
          smarties in SYDE!
        </Segment>

        <Segment
          title="1A Average vs High School Average"
          graph={<BoxPlot datatype="Admission Average vs 1A Average" />}
          onTop={false}
        >
          The is a weak positive relationship between
          admission average and 1A average 
          (The higher the admission average, the higher the 1A Average)
        </Segment>

        <Segment
          title="1A Average vs High School Program"
          graph={<BoxPlot datatype="1A Class Average vs HS Program"  width = {800} height ={500} />}
          onTop={true}
        ></Segment>

        <Segment
          title="Average Dropoff"
          graph={<HistogramCount datatype="Admission Average Drop Off"/>}
          onTop={false}
        >
          Academic drop-off is calculated by: 1A average - admission average.
          <br />
          <br />
          The median drop-off was 5.6%. Last year, the median drop-off was 15.9%.
          <br />
          <br />
          Note: The Fall 2020 term took place online.
        </Segment>

        <Segment
          title="Course Usefulness vs Difficulty"
          graph={<ScatterPlot datatype="Course Usefulness vs Difficulty"/>}
          onTop={false}
        >
          Usefulness and difficulty have a moderate positive relationship (The harder
          it is, the more useful it is).
          <br />
          <br />
          The easiest rated course was SYDE 101 (Communications in Systems
          Design Engineering-Written and Oral), and the hardest was SYDE 111
          (Fundamental Engineering Math 1).
          <br />
          <br />
          The most useful rated course was SYDE 121 (Digital Computation) , and
          the least useful rated was SYDE 101 (Communications in Systems Design
          Engineering-Written and Oral).
        </Segment>
        <Segment
          title="Course Average vs Difficulty"
          graph={<ScatterPlot datatype="Course Average vs Difficulty"/>}
          onTop={false}
        >
          The easiest course on average was SYDE 101 (Communications in Systems
          Design Engineering-Written and Oral), which also had a high average
          (91.5%).
          <br />
          <br />
          The hardest course was SYDE 111 (Fundamental Engineering Math 1) on
          average, which also had the lowest average (85.2%). Course average and
          difficulty showcased a
          moderate negative relationship (The higher the average, the easier the
          course was).
        </Segment>

        <Segment
          title="Course Difficulty vs Percentage of Lectures Attended"
          graph={
            <ScatterPlot datatype="Time Spent in Course vs Course Difficulty" width = {800} height ={500}/>
          }
          onTop={true}
        ></Segment>

        <Segment
          title="Course Average vs Time Spent"
          graph={<ScatterPlot datatype="Course Average vs Time Spent" />}
          onTop={false}
        >
          Lectures attended and difficulty, have a moderate positive relationship
          (The higher the difficulty of the course, the more lectures that were
          attended.
          <br />
          <br />
          SYDE 181 (Physics 1 : Statics) had the highest percentage of lectures
          attended at around 80%, and SYDE 161 (Introduction to Design) had the
          lowest percentage of lectures attended at around 45%.
        </Segment>
      <div className={styles.cardContainer}>
      <div className={styles.card}>
        <Card 
             title={<>
              Next:
              <br />
              Co-op
              </>
        }
            link={"/profile/co-op"}
            svg={"/cards/co-op.svg"}
            relativeSize={1}
            bottomSect={true}
        />
      </div>

    </div>
    </Content>
    </>
  );
}
