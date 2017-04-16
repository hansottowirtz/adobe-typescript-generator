/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class RubyTypes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Provides ruby for a group of characters.
			 * @type {Adobe.Indesign.RubyTypes}
			 * @readonly
			 */
			public static readonly GROUP_RUBY: Adobe.Indesign.RubyTypes;
			/**
			 * Alias for GROUP_RUBY. Provides ruby for a group of 
			 * characters.
			 * @type {Adobe.Indesign.RubyTypes}
			 * @readonly
			 */
			public static readonly groupRuby: Adobe.Indesign.RubyTypes;
			/**
			 * Provides ruby for each individual character in the group.
			 * @type {Adobe.Indesign.RubyTypes}
			 * @readonly
			 */
			public static readonly PER_CHARACTER_RUBY: Adobe.Indesign.RubyTypes;
			/**
			 * Alias for PER_CHARACTER_RUBY. Provides ruby for each 
			 * individual character in the group.
			 * @type {Adobe.Indesign.RubyTypes}
			 * @readonly
			 */
			public static readonly perCharacterRuby: Adobe.Indesign.RubyTypes;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}