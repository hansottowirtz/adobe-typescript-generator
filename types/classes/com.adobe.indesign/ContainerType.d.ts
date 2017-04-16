/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ContainerType extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for ALT. The container contains alternative values of 
			 * which only one can be used.
			 * @type {Adobe.Indesign.ContainerType}
			 * @readonly
			 */
			public static readonly alt: Adobe.Indesign.ContainerType;
			/**
			 * The container contains alternative values of which only one 
			 * can be used.
			 * @type {Adobe.Indesign.ContainerType}
			 * @readonly
			 */
			public static readonly ALT: Adobe.Indesign.ContainerType;
			/**
			 * Alias for BAG. The container contains unordered items.
			 * @type {Adobe.Indesign.ContainerType}
			 * @readonly
			 */
			public static readonly bag: Adobe.Indesign.ContainerType;
			/**
			 * The container contains unordered items.
			 * @type {Adobe.Indesign.ContainerType}
			 * @readonly
			 */
			public static readonly BAG: Adobe.Indesign.ContainerType;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for SEQ. The container contains ordered or sequential 
			 * items.
			 * @type {Adobe.Indesign.ContainerType}
			 * @readonly
			 */
			public static readonly seq: Adobe.Indesign.ContainerType;
			/**
			 * The container contains ordered or sequential items.
			 * @type {Adobe.Indesign.ContainerType}
			 * @readonly
			 */
			public static readonly SEQ: Adobe.Indesign.ContainerType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}