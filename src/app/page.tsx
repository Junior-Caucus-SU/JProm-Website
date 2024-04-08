import Image from 'next/image';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div>
      <div className={`flex flex-row ${styles.container}`}>
        <div className='juniorPromText'>
            <div className='flex flex-row'>
              <div className={styles.jprom_text}>Juni</div>
              <Image src="/images/home_page/home_page_Star_2.svg" alt="star 2" width={100} height={100} />
              <div className={styles.jprom_text}>r</div>
            </div>
            <div className='flex flex-row'>
              <div className={styles.jprom_text}>Pr</div>
              <Image src="/images/home_page/home_page_Star_3.svg" alt="star 3" width={100} height={100} />
              <div className={styles.jprom_text}>m</div>
            </div>
        </div>
        <div className='dateAndTime flex flex-col flex-end'>
          <div className={styles.date_time_text}>May 5th, 2024</div>
          <div className={styles.date_time_text}>Brookfield Place Port</div>
        </div>
      </div>
      {/* boat image */}
      <div className="boatContainer">
        <Image
          className={styles.boat}
          src="/images/home_page/home_page_Boat.png"
          alt="Boat"
          width={15000}   // Intrinsic width of the image
          height={13000}  // Intrinsic height of the image
        />
      </div>


      {/* description */}
      <div className={styles.description}>
        <div className={styles.description_text}>Set sail into a night of enchantment aboard a luxurious cruise liner!  Prepare to make waves of beautiful memories as we celebrate this year together on the Hudson River, accompanied by views of the glittering New York skyline.</div>
      </div>

      {/* Images with one overlaying the other */}
      <div className={styles.relativeContainer}>
        <Image 
          src="/images/home_page/home_page_Star_4.png"
          alt="Star 4"
          width={500}
          height={500}
        />
        <div className={styles.absoluteOverlay}>
          <Image 
            src="/images/home_page/home_page_get_tickets.png"
            alt="Get Tickets"
            width={700}
            height={700}
          />
        </div>
      </div>

      <div className='otherInfo'>
        <div className='faqs'>
          <div className='otherInfoTitleText'>Commonly Asked Questions</div>
        </div>
        <hr />
        <div className='sponsors'>
          <div className='otherInfoTitleText'>Our Sponsors</div>
        </div>
        <hr />
        <div className='aid'>
          <div className='otherInfoTitleText'>Financial Aid</div>
        </div>
      </div>
    </div>
  );
}
