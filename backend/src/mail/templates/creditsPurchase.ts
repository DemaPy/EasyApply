import { CreditsPackType } from 'src/types';
import { header } from './shared';

interface Props {
  pack: CreditsPackType;
}

export const creditsPurchase = ({ pack }: Props) => `
    <table align="center" border="0" cellspacing="0" cellpadding="0" width="660" style="font-family: Open Sans, sans-serif; table-layout: fixed;">
        <tbody>
            ${header({ prefixTitle: 'Welcome to' })}
            <tr>
                <td align="left"  style="padding: 24px; background-color: #ececec;">
                    <table border="0" cellspacing="0" cellpadding="0">
                        <tbody>
                            <tr>
                                <td style="padding-bottom: 24px;">
                                    <p style="margin: 0px; font-size: 18px;">
                                        ${pack.name} credits pack has been successfully purchased.
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
`;
