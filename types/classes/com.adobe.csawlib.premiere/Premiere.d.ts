/// <reference path="../../packages/com.adobe.csawlib.premiere/references.d.ts"/>

declare namespace Adobe {
	namespace CsawlibPremiere {
		class Premiere {
			/**
			 * @type {Adobe.Premiere.App}
			 * @readonly
			 */
			public static readonly app: Adobe.Premiere.App;
			/**
			 * @type {Adobe.Premiere.Document}
			 * @readonly
			 */
			public static readonly doc: Adobe.Premiere.Document;
			/**
			 * @type {Adobe.Flex.HostObject}
			 * @readonly
			 */
			public static readonly rootHostObject: Adobe.Flex.HostObject;
		}
	}
}