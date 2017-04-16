/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Document information */
		class DocumentInfo extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * @type {string}
			 */
			public author: string;
			/**
			 * @type {string}
			 */
			public authorPosition: string;
			/**
			 * @type {string}
			 */
			public caption: string;
			/**
			 * @type {string}
			 */
			public captionWriter: string;
			/**
			 * @type {string}
			 */
			public category: string;
			/**
			 * @type {string}
			 */
			public city: string;
			/**
			 * @type {Adobe.Photoshop.CopyrightedType}
			 */
			public copyrighted: Adobe.Photoshop.CopyrightedType;
			/**
			 * @type {string}
			 */
			public copyrightNotice: string;
			/**
			 * @type {string}
			 */
			public country: string;
			/**
			 * @type {string}
			 */
			public creationDate: string;
			/**
			 * @type {string}
			 */
			public credit: string;
			/**
			 * @type {any[]}
			 * @readonly
			 */
			public readonly exif: any[];
			/**
			 * @type {string}
			 */
			public headline: string;
			/**
			 * @type {string}
			 */
			public instructions: string;
			/**
			 * @type {string}
			 */
			public jobName: string;
			/**
			 * list of keywords
			 * @type {any[]}
			 */
			public keywords: any[];
			/**
			 * @type {string}
			 */
			public ownerUrl: string;
			/**
			 * @type {string}
			 */
			public provinceState: string;
			/**
			 * @type {string}
			 */
			public source: string;
			/**
			 * @type {any[]}
			 */
			public supplementalCategories: any[];
			/**
			 * @type {string}
			 */
			public title: string;
			/**
			 * @type {string}
			 */
			public transmissionReference: string;
			/**
			 * @type {Adobe.Photoshop.Urgency}
			 */
			public urgency: Adobe.Photoshop.Urgency;
		}
	}
}