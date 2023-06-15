import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import { Resume } from '../../../../core/entities/Resume';
import { Tags } from '../tags/Tags';

interface Props {
  resume: Resume
}

export const MyResumePDF = ({ resume }: Props) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>

        <View style={styles.header}>
          <Text style={styles.titleBold}>{resume.name}</Text>
          <Text style={styles.title}>joncolque@gmail.com</Text>
          <Text style={styles.title}>{resume.profession}</Text>
        </View>

        <View style={styles.aboutMe}>
          <Text style={styles.title}>{resume.aboutme}</Text>
        </View>

        <div>
          {resume.companies.map(c => <View key={c.name} style={styles.companieContainer}>
            <Text style={styles.titleCompanie}>{c.name}</Text>
            {c.jobs.map(j => <div key={j.name}>
              <Text style={styles.description}>{j.years} - {j.name}</Text>
              <Text style={styles.description}>{j.desc}</Text>
              {j.technologies && <TagsPDF items={j.technologies} />}
              {j.methodologies && <TagsPDF items={j.methodologies} />}
              {j.languages && <TagsPDF items={j.languages} />}
            </div>)}
          </View >)}
        </div>

      </View>
    </Page>
  </Document>
);

const TagsPDF = ({ items }: { items: string[] }) =>
  <Text style={styles.description}>
    {items?.map((item, idx) => `${item}${((idx + 1) === items?.length) ? '.' : ', '}`)}
  </Text>

Font.register({
  family: 'Montserrat',
  src: `https://fonts.gstatic.com/s/montserrat/v6/zhcz-_WihjSQC0oHJ9TCYC3USBnSvpkopQaUR-2r7iU.ttf`,
});

Font.register({
  family: 'MontserratB',
  src: `https://fonts.gstatic.com/s/montserrat/v6/IQHow_FEYlDC4Gzy_m8fcvEr6Hm6RMS0v1dtXsGir4g.ttf`,
});

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  header: {
    marginBottom: '30px'
  },
  aboutMe: {
    marginBottom: '30px'
  },
  titleBold: {
    fontFamily: 'MontserratB',
    fontSize: 12,
    alignSelf: 'center'
  },
  title: {
    fontFamily: 'Montserrat',
    fontSize: 12,
    alignSelf: 'center'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  companieContainer: {
    marginBottom: '10px'
  },
  titleCompanie: {
    fontFamily: 'MontserratB',
    fontSize: 12,
  },
  description: {
    fontFamily: 'Montserrat',
    fontSize: 10,
  }
});
