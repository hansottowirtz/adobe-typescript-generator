/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PreflightRuleFlag extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Treat as error if rule check failed.
			 * @type {Adobe.Indesign.PreflightRuleFlag}
			 * @readonly
			 */
			public static readonly RETURN_AS_ERROR: Adobe.Indesign.PreflightRuleFlag;
			/**
			 * Treat as information only if rule check failed.
			 * @type {Adobe.Indesign.PreflightRuleFlag}
			 * @readonly
			 */
			public static readonly RETURN_AS_INFORMATIONAL: Adobe.Indesign.PreflightRuleFlag;
			/**
			 * Treat as warning if rule check failed.
			 * @type {Adobe.Indesign.PreflightRuleFlag}
			 * @readonly
			 */
			public static readonly RETURN_AS_WARNING: Adobe.Indesign.PreflightRuleFlag;
			/**
			 * Alias for RETURN_AS_ERROR. Treat as error if rule check 
			 * failed.
			 * @type {Adobe.Indesign.PreflightRuleFlag}
			 * @readonly
			 */
			public static readonly returnAsError: Adobe.Indesign.PreflightRuleFlag;
			/**
			 * Alias for RETURN_AS_INFORMATIONAL. Treat as information only 
			 * if rule check failed.
			 * @type {Adobe.Indesign.PreflightRuleFlag}
			 * @readonly
			 */
			public static readonly returnAsInformational: Adobe.Indesign.PreflightRuleFlag;
			/**
			 * Alias for RETURN_AS_WARNING. Treat as warning if rule check 
			 * failed.
			 * @type {Adobe.Indesign.PreflightRuleFlag}
			 * @readonly
			 */
			public static readonly returnAsWarning: Adobe.Indesign.PreflightRuleFlag;
			/**
			 * Rule is currently disabled.
			 * @type {Adobe.Indesign.PreflightRuleFlag}
			 * @readonly
			 */
			public static readonly RULE_IS_DISABLED: Adobe.Indesign.PreflightRuleFlag;
			/**
			 * Alias for RULE_IS_DISABLED. Rule is currently disabled.
			 * @type {Adobe.Indesign.PreflightRuleFlag}
			 * @readonly
			 */
			public static readonly ruleIsDisabled: Adobe.Indesign.PreflightRuleFlag;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}