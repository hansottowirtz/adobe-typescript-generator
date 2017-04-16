/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ListType extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Bullet list.
			 * @type {Adobe.Incopy.ListType}
			 * @readonly
			 */
			public static readonly BULLET_LIST: Adobe.Incopy.ListType;
			/**
			 * Alias for BULLET_LIST. Bullet list.
			 * @type {Adobe.Incopy.ListType}
			 * @readonly
			 */
			public static readonly bulletList: Adobe.Incopy.ListType;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * No list.
			 * @type {Adobe.Incopy.ListType}
			 * @readonly
			 */
			public static readonly NO_LIST: Adobe.Incopy.ListType;
			/**
			 * Alias for NO_LIST. No list.
			 * @type {Adobe.Incopy.ListType}
			 * @readonly
			 */
			public static readonly noList: Adobe.Incopy.ListType;
			/**
			 * Numbered list.
			 * @type {Adobe.Incopy.ListType}
			 * @readonly
			 */
			public static readonly NUMBERED_LIST: Adobe.Incopy.ListType;
			/**
			 * Alias for NUMBERED_LIST. Numbered list.
			 * @type {Adobe.Incopy.ListType}
			 * @readonly
			 */
			public static readonly numberedList: Adobe.Incopy.ListType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}