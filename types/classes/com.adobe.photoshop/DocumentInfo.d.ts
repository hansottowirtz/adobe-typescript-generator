/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Document information */
		class DocumentInfo extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			public author: string;
			public authorPosition: string;
			public caption: string;
			public captionWriter: string;
			public category: string;
			public city: string;
			public copyrighted: Adobe.Photoshop.CopyrightedType;
			public copyrightNotice: string;
			public country: string;
			public creationDate: string;
			public credit: string;
			public readonly exif: any[];
			public headline: string;
			public instructions: string;
			public jobName: string;
			/** list of keywords */
			public keywords: any[];
			public ownerUrl: string;
			public provinceState: string;
			public source: string;
			public supplementalCategories: any[];
			public title: string;
			public transmissionReference: string;
			public urgency: Adobe.Photoshop.Urgency;
		}
	}
}