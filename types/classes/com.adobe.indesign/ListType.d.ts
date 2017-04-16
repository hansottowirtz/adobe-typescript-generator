/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ListType extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Bullet list.
			 * @type {Adobe.Indesign.ListType}
			 * @readonly
			 */
			public static readonly BULLET_LIST: Adobe.Indesign.ListType;
			/**
			 * Alias for BULLET_LIST. Bullet list.
			 * @type {Adobe.Indesign.ListType}
			 * @readonly
			 */
			public static readonly bulletList: Adobe.Indesign.ListType;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * No list.
			 * @type {Adobe.Indesign.ListType}
			 * @readonly
			 */
			public static readonly NO_LIST: Adobe.Indesign.ListType;
			/**
			 * Alias for NO_LIST. No list.
			 * @type {Adobe.Indesign.ListType}
			 * @readonly
			 */
			public static readonly noList: Adobe.Indesign.ListType;
			/**
			 * Numbered list.
			 * @type {Adobe.Indesign.ListType}
			 * @readonly
			 */
			public static readonly NUMBERED_LIST: Adobe.Indesign.ListType;
			/**
			 * Alias for NUMBERED_LIST. Numbered list.
			 * @type {Adobe.Indesign.ListType}
			 * @readonly
			 */
			public static readonly numberedList: Adobe.Indesign.ListType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}