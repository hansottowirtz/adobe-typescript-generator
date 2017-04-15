/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class DocumentInfo extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** The author. */
			public author: string;
			/** The author's position. */
			public authorPosition: string;
			/** The caption. */
			public caption: string;
			/** The caption author. */
			public captionWriter: string;
			/** The document category. */
			public category: string;
			/** The city. */
			public city: string;
			/** The copyright status. */
			public copyrighted: Adobe.Photoshop.CopyrightedType;
			/** The copyright notice. */
			public copyrightNotice: string;
			/** The country. */
			public country: string;
			/** The creation date. */
			public creationDate: string;
			/** The author credit. */
			public credit: string;
			/**
			 * For JPEG images, information stored with digital photographs 
			 * including camera type, date and time of photo, and file 
			 * size.
			 */
			public readonly exif: any[];
			/** The headline. */
			public headline: string;
			/** Instructions for using or processing the image. */
			public instructions: string;
			/** The job name. */
			public jobName: string;
			/** A list of keywords. */
			public keywords: any[];
			/** The url of the copyright info. */
			public ownerUrl: string;
			/** The state or province. */
			public provinceState: string;
			/** The source. */
			public source: string;
			/** Other categories. */
			public supplementalCategories: any[];
			/** The document title. */
			public title: string;
			/** The transmission reference. */
			public transmissionReference: string;
			/** The document urgency. */
			public urgency: Adobe.Photoshop.Urgency;
		}
	}
}