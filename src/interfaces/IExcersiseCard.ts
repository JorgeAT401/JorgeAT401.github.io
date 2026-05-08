/**
 * Interface for a excersise card
 */
export interface IExcersiseCard {
    /** the title of the exercise */
    title: string;
    /** the description of the exercise */  
    description: string;
    /** the level of the exercise (easy, medium, hard) */
    level: string;  
    /** the link route to the exercise */
    link: string;
}