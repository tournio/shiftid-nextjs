import ReactMarkdown from "react-markdown";
import lettersLogo from '../../images/shiftid-logo-just-letters.jpg';

import classes from './TournamentRules.module.scss';
import Image from "next/image";
import Link from "next/link";

const TournamentRules = () => {
  const generalRules = `
1.  The Seniors Handicap Invitational Family Tournament In DFW (SHIFTID) is an IGBO affiliated tournament, open to anyone fifty (50) years of age and over by invitation only. SHIFTID will be a mixed handicap competition, certified by the USBC, and will be adhering to USBC rules. The tournament director reserves the right to reject any application.
1.  All applicants are required to be USBC members pursuant to Rule 300c and must provide proof of membership (ID card or signed temporary card from league secretary). All applicants must also be a current member of IGBO, either as a member of an IGBO league or as an Associate member. Associate membership must be purchased prior to the tournament date.
1.  Space for the tournament is limited to thirty-eight (38) teams which may be composed of any combination of people. All participants will compete on an equal basis. Partial team entries will be accepted and accommodated, space available. Participants are only allowed to enter once for each event, and doubles partners must come from the same team.
1.  SHIFTID bowled events shall consist of Singles, Doubles, and Team, all handicapped. The number of games bowled for each event shall be three (3) games. Individual All Events will be the combined total of all nine (9) games bowled.
1.  Tournament Director reserves the right to dismiss or disqualify any participant, at any time during the tournament. If a bowler is dismissed or disqualified, no refund will be issued.
1.  All monetary awards for Singles, Doubles, Team, and Individual All Events are based on total pins bowled plus handicap and will be paid to the highest scores in each event on a minimum 1:10 payout ratio. All prize fees are returned at least 100%.
1.  Check-in begins sixty (60) minutes prior to each event. All team members must be present at the time of bowling. Late bowlers will bowl when ready and receive a score of zero (0) for each frame missed.
1.  Substitutes are permitted, provided they meet membership and average requirements.
1.  Bowlers shall have ten (10) minutes of practice on their assigned lanes prior to each event.
1.  The time limit for correction or protest of scores is twenty-four (24) hours. All protests must be in writing and submitted to the tournament director(s) before tournament prize payments are distributed. The protesting bowler and the Tournament Director will settle any disputes in accordance with the rules of SHIFTID and the appropriate USBC tournament rules, as applicable. The tournament director's decision is final unless an appeal is made in accordance with USBC Rule 329.
1.  Prizes will be distributed via check, payable in USD, within thirty (30) days of the completion of the tournament, barring any protests. A tie in any position will result in the prize monies being aggregated for the tied positions and divided equally by the number of ties for that placement.
1.  Entrants do hereby give consent to being photographed and/or videoed during the tournament.
1.  Any rule not covered herein, or in below section, will be covered by the relevant USBC tournament rule(s).
1.  Submission of an entry to SHIFTID indicates the bowler has read, understands, and agrees to the rules set forth herein. Once tournament entries are received, no refunds are allowed unless the bowler withdraws under the provisions of Average Rule 3.
1.  Bowling balls must be USBC approved and drilled, meeting all USBC requirements. Balls must have also been released and available to the public for purchase by the start of SHIFTID. Pre-release and test bowling equipment is not allowed.`;


  const averageRules = `
1.  Entering Averages will be calculated in the following order:
    1.  Bowlers with both a 2022-/2023 USBC Standard Composite Average, minimum 21 games, and current one year rolling IGBO Tournament Average Database (TAD) will enter with a composite of these two averages.
    1.  Bowlers without both must use:
        1.  IGBO TAD average, with a minimum of 27 games, for a current 1 year rolling period.
        1.  2022-2023 USBC Standard Composite Average, minimum 21 games.
        1.  2021-2022 Standard Composite Average, minimum of 21 games.
        1.  2023 summer league average, minimum of 21 games.
        1.  Bowlers may use a non-USBC league average, minimum of 21 games, provided the league bowls in a USBC-certified center. Bowler is responsible for providing average verification data if not present on www.bowl.com at the time of verification.
    1.  Bowlers who do not have a valid average as described under rule 1A or 1B will enter as a scratch participant and receive no handicap.
1.  Handicap is based on 90% of the difference between the bowler's entering average and highest entering average, rounded up to nearest 5, for the tournament. If the highest verified tournament average is 226, the handicap will be calculated as 90% of the difference between each bowler’s average and 230. The highest entering average will be determined once tournament entries have closed, and all averages have been verified.
1.  Tournament leadership has the authority to adjust the entering average or continued participation of any bowler. Average adjustments will be applied as set forth under USBC rules. A bowler unwilling to accept an average adjustment is entitled to a full refund. Requests for refunds must be in writing before the start of the tournament.
1.  USBC rules regarding the bowlers' responsibility to verify the accuracy of his/her entering average, whether submitted by the bowler, the team captain, or other, apply. Failure to use proper average shall disqualify scores if the submitted average is lower than the actual average, thereby resulting in a lower classification or more handicap. Final event standings shall be based on the higher average if it is higher than the entering average.
1.  USBC rule 319a(2) will not be waived.
1.  Averages will be verified based on league data available from USBC at www.bowl.com.`;

const registrationRules = `
1.  The tournament entry fee is $120 per bowler. That fee is broken down as follows:

    Prize Fund: $70
    
    Lineage: $36
    
    Tournament Expenses: $14

1.  The Prize Fund will be returned 100%.
1.  Tournament expenses include other costs of running the tournament.
1.  ONLY online registrations will be accepted, and online payment of entry fees is available by credit card.
1.  All entry fees, including cash payments, must be paid in full by the official entry deadline and will not be refunded except at the Tournament Director’s discretion.
1. The official deadline is June 30th, 2024 @ 11:59pm.  All entries and entry fee must be paid by the deadline for your entry to be accepted.`;

const optionalScratchRules = `
1.  The Optional Scratch event is available to all participants for an additional entry fee of $30. Optional Scratch entry fees may be paid at the time of tournament entry or during registration as long as the fee is paid before the first ball is rolled in competition.
1.  The Optional Scratch qualifying scores will consist of the total scratch scores for the nine (9) games in the Singles, Doubles and Team events. Optional Scratch divisions are as follows:

    Division A: Averages 205-300

    Division B: Averages 190-204

    Division C: Averages 175-189

    Division D: Averages 160-174

    Division E: Averages 0-159

1.  Prizes will be awarded in each division for the high scratch game, series, and all-events bowled by participants who have paid the Optional Scratch entry fee. The award ratio for the Optional Scratch will be at least 1:10 per division with 100% of monies collected paid to winners for each division. Ties for any event will be aggregated for the tied positions and divided equally by the number of ties for that placement.`;

const scratchMastersRules = `  
1.  Scratch Masters is an optional event available to all participants for an additional entry fee based on the participant’s average division.
1.  Divisions and Entry fees for this optional event is based on average divisions as follows:

    Division A: Averages 205-300 &ndash; $55
    
    Division B: Averages 190-204 &ndash; $50
    
    Division C: Averages 175-189 &ndash; $40
    
    Division D: Averages 160-174 &ndash; $30
    
    Division E: Averages 0-159 &ndash; $25
    
1.  All PBA, PWBA, or Team USA members will be classified in Division A, regardless of average.
1.  Qualifying will be based on the bowler’s scratch scores (without handicap) bowled during the Singles, Doubles, and Team events. 
1.  The top eight (8) entrants in each division will advance to the scratch master competition on Sunday. Please note that if a division has less than 20 entries, then only the top six (6) bowlers will qualify for scratch masters.
1.  We will begin shortly after the lanes are re-dressed after Singles.
1.  Qualifiers must be present for a meeting at 1:30pm, or other announced time, on Sunday. The meeting will cover the rules and lane assignments. Anyone not present for the meeting will lose their spot, and the next highest scoring available entrant from the division will bowl.
1.  In the event of a tie for the final qualifying spot, the spot will be awarded to whichever of the bowlers involved in the tie that had the highest three game series. If a tie still exists, the next tiebreaker is the second highest series. If the tie remains, the bowlers involved will bowl a one game roll-off to determine which bowler moves on to the competition.
1.  Games will consist of a maximum of four (4) games, bowled across three (3) pairs of lanes.
1.  All qualifiers will have 10 minutes of practice across all of the lanes being used by their division.
1.  All of the competitors in each division will bowl in game one on the first pair of lanes for the division. 
1.  At the end of each game, the two competitors with the lowest scratch scores are eliminated.
1.  In the event that two, or more, participants tie for the final place(s) moving on to the next round, the bowlers involved in the tie will bowl a 9th and 10th-frame roll-off to determine who moves on. If there is still a tie, the 9th and 10th-frame roll-off will be repeated until the tie is broken.
1.  The remaining bowlers shift a pair to the right and bowl the next game of competition, repeating until only two (2) bowlers remain.
1.  For the final game between the two remaining bowlers, the bowler with the highest score in the game just completed will have the right to decide which pair of lanes assigned to the division they want to bowl on and whether they want to bowl first or second during the championship game.
1.  The championship game will be bowled Pro-style, with the bowler going first bowling one frame starting on the left lane. The second bowler then bowls two frames starting on the right. They then alternate bowling two frames at a time.
1.  Any bowler that quits in the middle of a game, for reasons other than illness, or injury, forfeits any winnings.
`;

  return (
    <section className={classes.TournamentRules}>

      <div className={`row d-flex justify-content-center`}>
        <div className={`col-12 col-md-8`}>
          <Link href={'/'}
                title={'Back to main page'}
                className={``}>
            <Image src={lettersLogo}
                   alt={'SHIFTID logo'}
                   className={`img-fluid ${classes.Image}`}
            />
          </Link>
        </div>
      </div>

      {/*<p>(pending finalization for 2024)</p>*/}

      <h3 className={`section-heading`}>
        General Rules
      </h3>

      <ReactMarkdown>{generalRules}</ReactMarkdown>

      <h3 className={`section-heading`}>
        Average Rules
      </h3>

      <ReactMarkdown>{averageRules}</ReactMarkdown>

      <h3 className={`section-heading`}>
        Registration and Fees
      </h3>

      <ReactMarkdown>{registrationRules}</ReactMarkdown>

      <h3 className={`section-heading`}>
        Optional Scratch Rules (Optional Event)
      </h3>

      <ReactMarkdown>{optionalScratchRules}</ReactMarkdown>

      <h3 className={`section-heading`}>
        Scratch Masters Rules (Optional Event)
      </h3>

      <ReactMarkdown>{scratchMastersRules}</ReactMarkdown>
    </section>
  );
}

export default TournamentRules;
