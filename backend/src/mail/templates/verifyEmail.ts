import { header } from './shared';

interface Props {
  email: string;
  verificationUrl: string;
}

export const verifyEmail = ({ email, verificationUrl }: Props) => `
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
                                    Please, confirm your email ${email}, by clicking oo button below.
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td align="left">
                                <table style="background-color: #242424;">
                                    <tbody>
                                        <tr>
                                            <td style="padding: 10px;">
                                                <a href="${verificationUrl}" style="color: #ffffff; font-size: 18px; text-decoration: none;">Confirm</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </td>
            </tr>
        </tbody>
    </table>
`;
